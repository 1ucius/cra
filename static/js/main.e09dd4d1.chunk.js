(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/play.5004d330.svg"},function(e,t,a){e.exports=a.p+"static/media/pause.07100aab.svg"},function(e,t,a){e.exports=a.p+"static/media/volume.69de45ca.svg"},function(e,t,a){e.exports=a.p+"static/media/logo.02d30e17.svg"},,function(e,t,a){e.exports=a(26)},,,,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var s=a(0),i=a.n(s),r=a(8),n=a.n(r),o=a(2),c=a(3),l=a(5),d=a(4),p=a(6),u=a(1);var m=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={info:a.props.info,active:a.props.active||!1,shown:!1,recent:a.props.recent||!1},a.pushPropsToWrap=a.pushPropsToWrap.bind(Object(u.a)(Object(u.a)(a))),a.loadImage=a.loadImage.bind(Object(u.a)(Object(u.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.loadImage()}},{key:"pushPropsToWrap",value:function(){this.props.pushActivePodcast({current_podcast_info:this.state.info,current_podcast_index:this.state.info.index})}},{key:"loadImage",value:function(){var e=this;this.image=new Image,this.image.addEventListener("load",function(){delete e.image,e.setState({shown:!0})}),this.image.src=this.state.info.cover}},{key:"render",value:function(){return i.a.createElement("div",{className:"podcast roboto ".concat(this.state.shown?"podcast_shown":""," ").concat(this.state.active?"podcast_active":""," ").concat(this.state.recent?"podcast_recent xsmall-font":" small-font"),onClick:this.pushPropsToWrap},i.a.createElement("div",{className:"podcast__cover",style:{backgroundImage:"url(".concat(this.state.info.cover,")")}}),i.a.createElement("div",{className:"podcast__wrapper"},i.a.createElement("div",{className:"podcast__title"},i.a.createElement("p",null,this.state.info.title),i.a.createElement("p",null,this.state.info.date))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var a={};return e.active!==t.active&&(a.active=e.active),e.info!==t.info&&(a.info=e.info),a}}]),t}(s.Component),h=a(14),v=a(9),_=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={type:a.props.type,duration:a.props.duration,value:a.props.value,progress:a.props.progress,drag_size:a.props.drag_size,direction:a.props.direction,force_update:a.props.force_update,dragging:!1},a.updateProgress=a.updateProgress.bind(Object(u.a)(Object(u.a)(a))),a.pointerDown=a.pointerDown.bind(Object(u.a)(Object(u.a)(a))),a.pointerUp=a.pointerUp.bind(Object(u.a)(Object(u.a)(a))),a.callback=a.props.callback,a.recalculateOffsets=Object(v.debounce)(a.recalculateOffsets.bind(Object(u.a)(Object(u.a)(a))),400),a.slider_bar=i.a.createRef(),a.slider_progress=i.a.createRef(),a.slider_drag=i.a.createRef(),a.allow_progress=!1,a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.recalculateOffsets(),window.addEventListener("resize",this.recalculateOffsets)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.recalculateOffsets)}},{key:"componentWillReceiveProps",value:function(e){e!==this.props&&(this.state.dragging&&this.allow_progress||!1===this.state.dragging&&!1===this.allow_progress)&&this.setState(e)}},{key:"recalculateOffsets",value:function(){this.slider_bar_left=this.slider_bar.current.getBoundingClientRect().left,this.slider_bar_width=this.slider_bar.current.getBoundingClientRect().width}},{key:"updateProgress",value:function(e,t){var a=this,s=e.clientX,i=this.state.value*((s-this.slider_bar_left)/this.slider_bar_width),r={progress:i=i>this.state.value?this.state.value:i<0?0:i};void 0!==t&&Object.keys(t).map(function(e){r[e]=t[e]}),this.setState(r,function(){if(!1===a.state.dragging||a.state.force_update){var e="volume"===a.state.type?100:1;a.callback(i/e),a.allow_progress=!1}})}},{key:"pointerDown",value:function(){var e=this;this.setState({dragging:!0},function(){return e.allow_progress=!0}),window.addEventListener("pointermove",this.updateProgress),window.addEventListener("pointerup",this.pointerUp)}},{key:"pointerUp",value:function(e){window.removeEventListener("pointermove",this.updateProgress),window.removeEventListener("pointerup",this.pointerUp),this.updateProgress(e,{dragging:!1})}},{key:"render",value:function(){var e="",t="volume"===this.state.type?Math.round(this.state.progress):function(e){var t=parseInt(Math.floor(e),10),a=Math.floor(t/3600),s=Math.floor((t-3600*a)/60),i=t-3600*a-60*s;return a<10&&(a="0"+a),s<10&&(s="0"+s),i<10&&(i="0"+i),"".concat(a,":").concat(s,":").concat(i)}(this.state.progress),a="".concat(this.state.progress/this.state.value*100,"%");return"time"===this.state.type&&(e=i.a.createElement("span",{className:"slider__buffered"})),i.a.createElement("div",{className:"slider ".concat(this.state.dragging?"slider_dragging":""," ").concat(this.state.autohide?"slider_autohide":"")},i.a.createElement("span",{className:"slider__bar",ref:this.slider_bar,onClick:this.pointerUp},i.a.createElement("span",{className:"slider__cur",ref:this.slider_progress,style:{width:a}}),e,i.a.createElement("span",{className:"slider__drag",onPointerDown:this.pointerDown,ref:this.slider_drag,style:{left:a,width:"".concat(this.state.drag_size,"px"),height:"".concat(this.state.drag_size,"px")}})),i.a.createElement("div",{className:"slider__range roboto xxsmall-font"},i.a.createElement("span",{className:"slider__range-cur"},t),i.a.createElement("span",{className:"slider__range-length"},this.state.duration)))}}]),t}(s.Component),f=a(10),g=a.n(f),b=a(11),y=a.n(b),O=a(12),E=a.n(O),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={info:a.props.info,playing:!1,current_time:a.props.info.current_time||0,volume:a.props.volume||1},a.audio=new Audio,a.audio.volume=a.props.volume||1,a.togglePlay=a.togglePlay.bind(Object(u.a)(Object(u.a)(a))),a.progressUpdate=a.progressUpdate.bind(Object(u.a)(Object(u.a)(a))),a.recieveTimeFromSlider=a.recieveTimeFromSlider.bind(Object(u.a)(Object(u.a)(a))),a.recieveVolumeFromSlider=a.recieveVolumeFromSlider.bind(Object(u.a)(Object(u.a)(a))),a.updateActivePodcastState=a.props.updateActivePodcastState,a.audio.addEventListener("timeupdate",a.progressUpdate),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=this;e.info!==this.props.info&&this.setState({info:e.info},function(){t.state.info.audio!==t.audio.src&&(t.audio.pause(),t.audio.src=t.state.info.audio,t.audio.currentTime=t.state.info.current_time||0,t.state.playing&&t.audio.play())})}},{key:"togglePlay",value:function(){var e=this;this.setState({playing:!this.state.playing},function(){e.state.playing?e.audio.play():e.audio.pause()})}},{key:"progressUpdate",value:function(){var e=this;this.setState(function(t){return{current_time:e.audio.currentTime,info:Object(h.a)({},t.info,{current_time:e.audio.currentTime})}},function(){e.state.playing&&e.updateActivePodcastState(e.state.info)})}},{key:"recieveTimeFromSlider",value:function(e){this.audio.currentTime=e,this.setState({current_time:e})}},{key:"recieveVolumeFromSlider",value:function(e){this.audio.volume=e,this.setState({volume:e})}},{key:"render",value:function(){return i.a.createElement("div",{className:"player".concat(this.state.playing?" player_playing":""),id:"player"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"player__wrap"},i.a.createElement("div",{className:"player__cover"},i.a.createElement("img",{src:this.state.info.cover,alt:"podcast cover"}),i.a.createElement("h3",{className:"player__title roboto small-font"},i.a.createElement("p",null,this.state.info.title),i.a.createElement("p",null,this.state.info.date))),i.a.createElement("div",{className:"player__controls"},i.a.createElement("div",{className:"player__row player__row_center"},i.a.createElement("span",{className:"player__playback",onClick:this.togglePlay},i.a.createElement("img",{className:"player__icon player__icon_play",src:g.a,alt:"play icon"}),i.a.createElement("img",{className:"player__icon player__icon_pause",src:y.a,alt:"pause icon"}))),i.a.createElement("div",{className:"player__time"},i.a.createElement(_,{type:"time",duration:this.state.info.duration,value:this.state.info.duration_sec,progress:this.state.current_time,drag_size:10,direction:"horizontal",callback:this.recieveTimeFromSlider,force_update:!1,autohide:!1})),i.a.createElement("div",{className:"player__volume"},i.a.createElement("img",{src:E.a,className:"player__icon player__icon_volume",alt:"volume icon"}),i.a.createElement(_,{type:"volume",duration:100,value:100,progress:100*this.state.volume,drag_size:10,direction:"horizontal",callback:this.recieveVolumeFromSlider,force_update:!0,autohide:!0}))))))}}]),t}(s.Component),N=a(13),w=a.n(N),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={api_link:a.props.apiLink,podcasts:[],next_to_display:0,display_counter:a.props.displayCounter,cache_counter:a.props.cacheCounter,active_podcast:{},latest_podcasts:[]},a.parsePodcast=a.parsePodcast.bind(Object(u.a)(Object(u.a)(a))),a.loadMore=a.loadMore.bind(Object(u.a)(Object(u.a)(a))),a.setActivePodcast=a.setActivePodcast.bind(Object(u.a)(Object(u.a)(a))),a.getActivePodcastState=a.getActivePodcastState.bind(Object(u.a)(Object(u.a)(a))),a.podcastsToRender=a.podcastsToRender.bind(Object(u.a)(Object(u.a)(a))),a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch(this.state.api_link).then(function(e){return e.text()}).then(function(t){var a=function e(t){var a={};if(1===t.nodeType){if(t.attributes.length>0){a["@attributes"]={};for(var s=0;s<t.attributes.length;s++){var i=t.attributes.item(s);a["@attributes"][i.nodeName]=i.nodeValue}}}else 3===t.nodeType&&(a=t.nodeValue);if(t.hasChildNodes())for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes.item(r),o=n.nodeName;if("undefined"==typeof a[o])a[o]=e(n);else{if("undefined"==typeof a[o].push){var c=a[o];a[o]=[],a[o].push(c)}a[o].push(e(n))}}return a}((new DOMParser).parseFromString(t,"text/xml")).rss.channel.item;e.setState({podcasts:a.map(function(t,a){return e.parsePodcast(t,a)})})})}},{key:"parsePodcast",value:function(e,t){return{index:t,title:e.title["#text"].split(" - ")[0],date:e.title["#text"].split(" - ")[1],description:e.description["#text"],duration:e["itunes:duration"]["#text"],duration_sec:function(e){var t=e.split(":");return t.length>2?3600*Number(t[0])+60*Number(t[1])+Number(t[2]):2===t.length?60*Number(t[0])+Number(t[1]):Number(t[0])}(e["itunes:duration"]["#text"]),audio:e.guid["#text"],cover:e.wideImage["#text"],current_time:0}}},{key:"loadMore",value:function(){this.setState({next_to_display:this.state.next_to_display+this.state.display_counter})}},{key:"setActivePodcast",value:function(e){var t=this.state.latest_podcasts,a=e.current_podcast_info;if(a!==this.state.active_podcast){var s=(t=this.state.latest_podcasts).indexOf(a);s>0?(t[s].shown=!1,function(e,t,a){if(a>=e.length)for(var s=a-e.length+1;s--;)e.push(void 0);e.splice(a,0,e.splice(t,1)[0])}(t,s,0)):t.unshift(a),t.length>this.state.cache_counter&&(t=t.splice(0,this.state.cache_counter))}this.setState({latest_podcasts:t,active_podcast:a||e,activePodcast:e.current_podcast_index})}},{key:"getActivePodcastState",value:function(e){var t=this.state.podcasts;t[e.index]=e;var a=this.state.latest_podcasts;a.map(function(t){t.index===e.index&&(a[a.indexOf(t)]=e)}),this.setState({latest_podcasts:a,podcasts:t,active_podcast:e})}},{key:"podcastsToRender",value:function(e,t,a){var s=this,r=t?e.slice(0,t):e,n=a;return r.map(function(e){var t=e.index===s.state.active_podcast.index;return i.a.createElement(m,{key:e.index,info:e,pushActivePodcast:s.setActivePodcast,active:t,recent:n})})}},{key:"render",value:function(){var e=this.state.next_to_display+this.state.display_counter,t=this.podcastsToRender(this.state.podcasts,e,!1),a=this.podcastsToRender(this.state.latest_podcasts,!1,!0);return i.a.createElement("div",{className:"radio",id:"radio"},i.a.createElement("div",{className:"radio__header"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"logo",id:"logo"},i.a.createElement("a",{href:"#1",className:"logo__link"},i.a.createElement("img",{src:w.a,className:"logo__img",alt:"logo"}))))),i.a.createElement("div",{className:"radio__player-wrap"},i.a.createElement(j,{info:this.state.active_podcast,updateActivePodcastState:this.getActivePodcastState})),i.a.createElement("div",{className:"radio__recent"},i.a.createElement("h2",{className:"radio__title alerta large-font"},"Recent Played:"),i.a.createElement("div",{className:"radio__wrap radio__wrap_latest"},a)),i.a.createElement("div",{className:"radio__all"},i.a.createElement("h2",{className:"radio__title alerta large-font"},"Podcasts:"),i.a.createElement("div",{className:"radio__wrap"},t)),i.a.createElement("button",{className:"load roboto",id:"load",onClick:this.loadMore},"Load more podcasts"))}}]),t}(s.Component),P=(a(22),function(e){function t(){return Object(o.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement(k,{apiLink:"https://tools.planetradio.co.uk/core/podcasts/rss.php?name=radio-1-norge",displayCounter:12,cacheCounter:5})))}}]),t}(s.Component));n.a.render(i.a.createElement(P,null),document.getElementById("root"))}],[[15,2,1]]]);
//# sourceMappingURL=main.e09dd4d1.chunk.js.map