"use strict";var precacheConfig=[["/new-portfolio/index.html","753759bdebcbb96752573d4f8cc0ea35"],["/new-portfolio/static/css/main.b01d768c.css","827383757e05fcb7900b36a4d7f9ece3"],["/new-portfolio/static/js/main.093613b9.js","c3657212725a5e8761f748962eb7532a"],["/new-portfolio/static/media/Linux-icon.11b8a113.png","11b8a113e44f9ac1db3725df0c91ad79"],["/new-portfolio/static/media/checkers-device.3b862106.png","3b86210630b91e76effcf7355e91d178"],["/new-portfolio/static/media/esp.3c6f6514.JPG","3c6f6514fa4f21a305500e03d23062f9"],["/new-portfolio/static/media/fontawesome-webfont.674f50d2.eot","674f50d287a8c48dc19ba404d20fe713"],["/new-portfolio/static/media/fontawesome-webfont.912ec66d.svg","912ec66d7572ff821749319396470bde"],["/new-portfolio/static/media/fontawesome-webfont.af7ae505.woff2","af7ae505a9eed503f8b8e6982036873e"],["/new-portfolio/static/media/fontawesome-webfont.b06871f2.ttf","b06871f281fee6b241d60582ae9369b9"],["/new-portfolio/static/media/fontawesome-webfont.fee66e71.woff","fee66e712a8a08eef5805a46892932ad"],["/new-portfolio/static/media/gallows-device.e4645f4f.png","e4645f4f1f1fb3dca08ff773665658a7"],["/new-portfolio/static/media/git.f800583d.png","f800583debd7ed6992295dd2f2d508c6"],["/new-portfolio/static/media/portfolio10.0c65e976.png","0c65e976dae57b8f1031e6aea17af533"],["/new-portfolio/static/media/school-device.85a9d1b9.png","85a9d1b946667241cfe88b84fcd32c70"],["/new-portfolio/static/media/tictactoe-device.cd06706c.png","cd06706ce1d5d76042000aa9f64f6371"],["/new-portfolio/static/media/win.e97544d2.png","e97544d213884e75ff527db2f153fa3d"],["/new-portfolio/static/media/ws.4c086446.png","4c086446e13160b26affb8a9348fa150"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/new-portfolio/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});