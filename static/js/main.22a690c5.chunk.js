(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/play.5004d330.svg"},20:function(e,t,a){e.exports=a.p+"static/media/pause.07100aab.svg"},21:function(e,t,a){e.exports=a.p+"static/media/volume.69de45ca.svg"},22:function(e,t,a){e.exports=a.p+"static/media/logo.02d30e17.svg"},24:function(e,t,a){e.exports=a(38)},34:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),i=a.n(r),c=a(2),s=a(3),l=a(5),d=a(4),u=a(6),p=a(10),m=o.a.memo(function(e){return o.a.createElement("div",{className:"radio__header"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"logo",id:"logo"},o.a.createElement("a",{href:e.link,className:"logo__link"},o.a.createElement("img",{src:e.logo,className:"logo__img",alt:"logo"})))))}),_=o.a.memo(function(e){return o.a.createElement("div",{className:"radio__all"},o.a.createElement("h2",{className:"radio__title alerta large-font"},"Podcasts:"),o.a.createElement("div",{className:"radio__wrap"},e.podcasts_array))}),f=o.a.memo(function(e){return e.podcasts_array.length?o.a.createElement("div",{className:"radio__recent"},o.a.createElement("h2",{className:"radio__title alerta large-font"},"Recent Played:"),o.a.createElement("div",{className:"radio__wrap radio__wrap_latest"},e.podcasts_array)):o.a.createElement("div",{className:"radio__recent radio__recent_hidden"})}),g=o.a.memo(function(e){if(e.shown)return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"podcast__cover",style:{backgroundImage:"url(".concat(e.cover_image,")")}}),o.a.createElement("div",{className:"podcast__wrapper"},o.a.createElement("div",{className:"podcast__title"},o.a.createElement("p",null,e.title),o.a.createElement("p",null,e.publishing_date))))}),v=a(7);function h(e){var t=e.split(":");return t.length>2?3600*Number(t[0])+60*Number(t[1])+Number(t[2]):2===t.length?60*Number(t[0])+Number(t[1]):Number(t[0])}var E={FETCH_PODCASTS_BEGIN:"FETCH_PODCASTS_BEGIN",FETCH_PODCASTS_SUCCESS:"FETCH_PODCASTS_SUCCESS",FETCH_PODCASTS_FAILURE:"FETCH_PODCASTS_FAILURE",UPDATE_PODCASTS:"UPDATE_PODCASTS",LOAD_MORE_PODCASTS:"LOAD_MORE_PODCASTS",CHANGE_VOLUME:"CHANGE_VOLUME"},b=function(e){return{type:E.FETCH_PODCASTS_SUCCESS,payload:e}},y=function(e){return{type:E.FETCH_PODCASTS_FAILURE,payload:e}},w=function(e){return{type:E.UPDATE_PODCASTS,payload:e}};function O(e){return function(t){return fetch(e).then(function(e){return e.text()}).then(function(e){return function e(t){var a={};if(1===t.nodeType){if(t.attributes.length>0){a["@attributes"]={};for(var n=0;n<t.attributes.length;n++){var o=t.attributes.item(n);a["@attributes"][o.nodeName]=o.nodeValue}}}else 3===t.nodeType&&(a=t.nodeValue);if(t.hasChildNodes())for(var r=0;r<t.childNodes.length;r++){var i=t.childNodes.item(r),c=i.nodeName;if("undefined"==typeof a[c])a[c]=e(i);else{if("undefined"==typeof a[c].push){var s=a[c];a[c]=[],a[c].push(s)}a[c].push(e(i))}}return a}((new DOMParser).parseFromString(e,"text/xml")).rss.channel.item.map(function(e,t){return function(e){return{index:"".concat(Number(e["itunes:season"]["#text"])).concat(Number(e["itunes:episode"]["#text"])).concat(h(e["itunes:duration"]["#text"])),title:e.title["#text"].split(" - ")[0],publishing_date:e.title["#text"].split(" - ")[1],description:e.description["#text"],duration:e["itunes:duration"]["#text"],duration_in_sec:h(e["itunes:duration"]["#text"]),source:e.guid["#text"],cover_image:e.wideImage["#text"],current_time:0}}(e)})}).then(function(e){return t(b(e))}).catch(function(e){return t(y(e))})}}function S(e){return function(t,a){var n=a().podcasts,o=n.all_podcasts,r=n.recent_podcasts,i=n.cache_counter,c={active_podcast:e};o.map(function(t,a){t.index===e.index&&(o[a]=e)}),c.all_podcasts=o;var s=function(e,t){var a=-1;return e.map(function(e,n){e.index===t.index&&(a=n)}),a}(r,e);s>-1?(!function(e,t,a){if(a>=e.length)for(var n=a-e.length+1;n--;)e.push(void 0);e.splice(a,0,e.splice(t,1)[0])}(r,s,0),r[0]=e):r.unshift(e),r.length>i&&(r=r.splice(0,i)),c.recent_podcasts=r,t(w(c))}}var N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={shown:!1},a.componentWillMount=function(){a.el=o.a.createRef()},a.componentDidMount=function(){a.loadImage()},a.loadImage=function(){a.image=new Image,a.image.addEventListener("load",function(){delete a.image,a.setState({shown:!0})}),a.image.src=a.props.info.cover_image},a.update=function(){a.props.updateInfo(a.props.info)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.info,a=e.active;return o.a.createElement("div",{className:"podcast roboto ".concat(this.state.shown?"podcast_shown":""," ").concat(a?"podcast_active":""),onClick:this.update,ref:this.el},o.a.createElement(g,{shown:this.state.shown,active:a,cover_image:t.cover_image,title:t.title,publishing_date:t.publishing_date}))}}]),t}(n.Component),C=Object(v.b)(function(e){return{state:e.podcasts.active_podcast}},function(e){return{updateInfo:function(t){e(S(t))}}})(N),A=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={type:a.props.type,duration:a.props.duration,value:a.props.value,progress:a.props.progress,drag_size:a.props.drag_size,direction:a.props.direction,force_update:a.props.force_update,dragging:!1,autohide:a.props.autohide},a.componentWillMount=function(){a.callback=a.props.callback,a.slider_drag=o.a.createRef(),a.slider_bar=o.a.createRef(),a.slider_progress=o.a.createRef()},a.componentDidMount=function(){a.recalculateOffsets(),window.addEventListener("resize",Object(p.debounce)(a.recalculateOffsets,400))},a.componentWillUnmount=function(){window.removeEventListener("resize",Object(p.debounce)(a.recalculateOffsets,400))},a.componentWillReceiveProps=function(e){e!==a.props&&!1===a.state.dragging&&a.setState(e)},a.recalculateOffsets=function(){null!=a.slider_bar.current&&(a.slider_bar_left=a.slider_bar.current.getBoundingClientRect().left,a.slider_bar_width=a.slider_bar.current.getBoundingClientRect().width)},a.updateProgress=function(e,t){var n=e.clientX,o=a.state.value*((n-a.slider_bar_left)/a.slider_bar_width),r={progress:o=o>a.state.value?a.state.value:o<0?0:o};void 0!==t&&Object.keys(t).map(function(e){return r[e]=t[e]}),a.setState(r,function(){if(!1===a.state.dragging||a.state.force_update){var e="volume"===a.state.type?100:1;a.callback(o/e),a.allow_progress=!1}})},a.pointerDown=function(){a.setState({dragging:!0},function(){return a.allow_progress=!0}),window.addEventListener("pointermove",a.updateProgress),window.addEventListener("pointerup",a.pointerUp)},a.pointerUp=function(e){window.removeEventListener("pointermove",a.updateProgress),window.removeEventListener("pointerup",a.pointerUp),a.updateProgress(e,{dragging:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e="volume"===this.state.type?Math.round(this.state.progress):function(e){var t=parseInt(Math.floor(e),10),a=Math.floor(t/3600),n=Math.floor((t-3600*a)/60),o=t-3600*a-60*n;return a<10&&(a="0"+a),n<10&&(n="0"+n),o<10&&(o="0"+o),"".concat(a,":").concat(n,":").concat(o)}(this.state.progress),t="".concat(this.state.progress/this.state.value*100,"%");return o.a.createElement("div",{className:"slider ".concat(this.state.dragging?"slider_dragging":""," ").concat(this.state.autohide?"slider_autohide":"")},o.a.createElement("span",{className:"slider__bar",ref:this.slider_bar,onClick:this.pointerUp},o.a.createElement("span",{className:"slider__cur",ref:this.slider_progress,style:{width:t}}),o.a.createElement("span",{className:"slider__drag",onPointerDown:this.pointerDown,ref:this.slider_drag,style:{left:t,width:"".concat(this.state.drag_size,"px"),height:"".concat(this.state.drag_size,"px")}})),o.a.createElement("div",{className:"slider__range roboto xxsmall-font"},o.a.createElement("span",{className:"slider__range-cur"},e),o.a.createElement("span",{className:"slider__range-length"},this.state.duration)))}}]),t}(n.Component),T=a(19),j=a.n(T),P=a(20),k=a.n(P),D=a(21),x=a.n(D),U=o.a.memo(function(e){return o.a.createElement("div",{className:"radio__player-wrap".concat(e.active?" radio__player-wrap_active":"")},o.a.createElement("div",{className:"player".concat(e.playing?" player_playing":""),id:"player"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"player__wrap"},o.a.createElement("div",{className:"player__cover"},o.a.createElement("img",{src:e.cover_image,alt:"podcast cover"}),o.a.createElement("h3",{className:"player__title roboto small-font"},o.a.createElement("p",null,e.title),o.a.createElement("p",null,e.publishing_date))),o.a.createElement("div",{className:"player__controls"},o.a.createElement("div",{className:"player__row player__row_center"},o.a.createElement("span",{className:"player__playback",onClick:e.play_btn_callback},o.a.createElement("img",{className:"player__icon player__icon_play",src:j.a,alt:"play icon"}),o.a.createElement("img",{className:"player__icon player__icon_pause",src:k.a,alt:"pause icon"}))),o.a.createElement("div",{className:"player__time"},o.a.createElement(A,{type:"time",duration:e.podcast.duration,value:e.podcast.duration_in_sec,progress:e.podcast.current_time,drag_size:10,direction:"horizontal",callback:e.time_callback,force_update:!1,autohide:!1})),o.a.createElement("div",{className:"player__volume"},o.a.createElement("img",{src:x.a,className:"player__icon player__icon_volume",alt:"volume icon"}),o.a.createElement(A,{type:"volume",duration:100,value:100,progress:100*e.volume||100,drag_size:10,direction:"horizontal",callback:e.volume_callback,force_update:!0,autohide:!0})))))))}),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(o)))).state={playing:!1},a.componentWillMount=function(){a.audio=new Audio,a.audio.volume=1,a.audio.addEventListener("timeupdate",a.progressUpdate),a.audio.addEventListener("ended",a.audioEnded)},a.audioEnded=function(){a.setState({playing:!1})},a.togglePlay=function(){a.setState({playing:!a.state.playing},function(){a.state.playing?a.audio.play():a.audio.pause()})},a.progressUpdate=function(){var e=Object.assign({},a.props.podcast);e.current_time=a.audio.currentTime,a.props.updateInfo(e)},a.updateAudio=function(){a.audio.src!==a.props.podcast.source&&(a.audio.src=a.props.podcast.source,a.audio.currentTime=a.props.podcast.current_time||0,a.state.playing?a.audio.play():a.audio.pause())},a.recieveTimeFromSlider=function(e){a.audio.currentTime=e},a.recieveVolumeFromSlider=function(e){a.audio.volume=e,a.props.changeVolume(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.volume,a=e.podcast;return this.updateAudio(),o.a.createElement(U,{active:Object.keys(a).length,podcast:a,playing:this.state.playing,cover_image:a.cover_image,title:a.title,publishing_date:a.publishing_date,play_btn_callback:this.togglePlay,time_callback:this.recieveTimeFromSlider,volume_callback:this.recieveVolumeFromSlider,volume:t})}}]),t}(n.Component),M=Object(v.b)(function(e){return{volume:e.player.volume,podcast:e.podcasts.active_podcast}},function(e){return{updateInfo:function(t){e(S(t))},changeVolume:function(t){e(function(e){return{type:E.CHANGE_VOLUME,payload:e}}(t))}}})(L),R=a(22),F=a.n(R),I=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.fetch(a.props.podcasts.api_link),window.addEventListener("scroll",Object(p.debounce)(a.loadMore,300))},a.componentWillUnmount=function(){window.removeEventListener("scroll",Object(p.debounce)(a.loadMore,300))},a.loadMore=function(){window.innerHeight+window.scrollY>=document.body.scrollHeight-100&&a.props.podcasts.podcasts_amount>=a.props.podcasts.amount_to_display&&a.props.loadMorePodcasts(a.props.podcasts.amount_to_display+a.props.podcasts.amount_to_display_increment)},a.createPodcastsToRender=function(e,t){return(t?e.slice(0,t):e).map(function(e){var t=e===a.props.podcasts.active_podcast;return o.a.createElement(C,{key:e.index,info:e,active:t})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.podcasts;return o.a.createElement("div",{className:"radio",id:"radio"},o.a.createElement(m,{link:"#1",logo:F.a}),o.a.createElement(f,{podcasts_array:this.createPodcastsToRender(e.recent_podcasts)}),o.a.createElement(_,{podcasts_array:this.createPodcastsToRender(e.all_podcasts,e.amount_to_display)}),o.a.createElement(M,null))}}]),t}(n.Component),H=Object(v.b)(function(e){return{podcasts:e.podcasts}},function(e){return{fetch:function(t){e(O(t))},loadMorePodcasts:function(t){e(function(e){return{type:E.LOAD_MORE_PODCASTS,payload:e}}(t))}}})(I),W=(a(34),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"container"},o.a.createElement(H,null)))}}]),t}(n.Component)),V=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function z(e,t){navigator.serviceWorker.register(e).then(function(e){console.log("Yoohoo! SW is registered. Nice job!:)"),e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var B=a(8),G=a(9),X={api_link:"https://tools.planetradio.co.uk/core/podcasts/rss.php?name=radio-1-norge",all_podcasts:[],active_podcast:{},recent_podcasts:[],loading:!1,error:null,podcasts_amount:null,amount_to_display:12,amount_to_display_increment:12,cache_counter:5};var J={volume:1};var Y=Object(B.c)({podcasts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E.FETCH_PODCASTS_BEGIN:return Object(G.a)({},e,{loading:!0,error:null});case E.FETCH_PODCASTS_SUCCESS:return Object(G.a)({},e,{all_podcasts:n,podcasts_amount:n.length,loading:!1,error:null});case E.FETCH_PODCASTS_FAILURE:return Object(G.a)({},e,{loading:!1,error:n});case E.LOAD_MORE_PODCASTS:return Object(G.a)({},e,{amount_to_display:n});case E.UPDATE_PODCASTS:return Object(G.a)({},e,{active_podcast:n.active_podcast,all_podcasts:n.all_podcasts,recent_podcasts:n.recent_podcasts});default:return e}},player:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case E.CHANGE_VOLUME:return Object(G.a)({},e,{volume:n});default:return e}}}),$=a(23),q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,K=Object(B.e)(Y,q(Object(B.a)($.a)));i.a.render(o.a.createElement(v.a,{store:K},o.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/cra",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/cra","/service-worker-custom.js");V?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):z(t,e)})}}()}},[[24,2,1]]]);
//# sourceMappingURL=main.22a690c5.chunk.js.map