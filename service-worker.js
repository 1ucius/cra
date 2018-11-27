/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/cra/precache-manifest.2a201af7833a916b6884488a94ccd291.js"
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/cra/index.html", {
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
!function(e){var t={};function n(c){if(t[c])return t[c].exports;var i=t[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,c){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(n.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(c,i,function(t){return e[t]}.bind(null,i));return c},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t){var n=["/manifest.json","/static/css/main.e3b0434b.chunk.css","/static/js/1.f29157c7.chunk.js","/static/js/main.2ecfbce2.chunk.js","/static/js/main.2ecfbce2.chunk.js","/static/media/pause.07100aab.svg","/static/media/logo.02d30e17.svg","/static/media/play.5004d330.svg","/static/media/play.5004d330.svg"];self.addEventListener("install",function(e){e.waitUntil(caches.open("my-pwa-cache-v1").then(function(e){return console.log("Opened and caching files"),e.addAll(n)}))}),self.addEventListener("activate",function(e){var t=["my-pwa-cache-v1"];e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(!t.includes(e))return console.log("Deleting cache: "+e),caches.delete(e)}))}))}),self.addEventListener("fetch",function(e){0})}]);