export function xmlToJson(xml) {
    var obj = {};
    if (xml.nodeType === 1) {
        if (xml.attributes.length > 0) {
        obj["@attributes"] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
                var attribute = xml.attributes.item(j);
                obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
            }
        }
    } else if (xml.nodeType === 3) {
        obj = xml.nodeValue;
    }
    if (xml.hasChildNodes()) {
        for(var i = 0; i < xml.childNodes.length; i++) {
            var item = xml.childNodes.item(i);
            var nodeName = item.nodeName;
            if (typeof(obj[nodeName]) == "undefined") {
                obj[nodeName] = xmlToJson(item);
            } else {
                if (typeof(obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];
                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                }
                obj[nodeName].push(xmlToJson(item));
            }
        }
    }
    return obj;
}

export function timeToSec(prop) {
    let time = prop.split(':'),
        sec  = 0;
    if (time.length > 2) {
        sec = Number(time[0])*3600 + Number(time[1])*60 + Number(time[2]);
    } else if (time.length === 2) {
        sec = Number(time[0])*60 + Number(time[1]);
    } else {
        sec = Number(time[0]);
    }
    return sec;
}

export function secToTime(prop) {
    let sec_num = parseInt(Math.floor(prop), 10);
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return `${hours}:${minutes}:${seconds}`;
}

export function shiftArrayItem(arr, old_index, new_index) {
    if (new_index >= arr.length) {
        var k = new_index - arr.length + 1;
        while (k--) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
}

export function checkElementVisibility(el) {
    let rect       = el.getBoundingClientRect();
    let elemTop    = rect.top;
    let elemBottom = rect.bottom;
    let isVisible  = (elemTop >= -.8*window.innerHeight) && (elemBottom <= 1.8*window.innerHeight);
    return isVisible;
}

export function parsePodcastObject(podcast) {
    return {
        index:              `${Number(podcast['itunes:season']['#text'])}${Number(podcast['itunes:episode']['#text'])}${timeToSec(podcast['itunes:duration']['#text'])}`,
        title:              podcast.title['#text'].split(' - ')[0],
        publishing_date:    podcast.title['#text'].split(' - ')[1],
        description:        podcast.description['#text'],
        duration:           podcast['itunes:duration']['#text'],
        duration_in_sec:    timeToSec(podcast['itunes:duration']['#text']),
        source:             podcast.guid['#text'],
        cover_image:        podcast.wideImage['#text'],
        current_time:       0
    }
}

export function findDuplicate(arr, to_find) {
    let duplicate = -1;
    arr.map((item, i) => {
        if (item.index === to_find.index) {
            duplicate = i;
        }
    });
    return duplicate;
}

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('recent');
        if ( serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('recent', serializedState);
    } catch (err) {
        console.log(err);
    }
}