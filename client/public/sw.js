if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const d=e=>i(e,o),c={module:{uri:o},exports:r,require:d};a[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-6316bd60"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/ZB2ZNKh05wbW1pYRL7_K3/_buildManifest.js",revision:"3b409a3a15ac739242fac864472c3037"},{url:"/_next/static/ZB2ZNKh05wbW1pYRL7_K3/_middlewareManifest.js",revision:"fb2823d66b3e778e04a3f681d0d2fb19"},{url:"/_next/static/ZB2ZNKh05wbW1pYRL7_K3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/352-613f562b4f765211.js",revision:"613f562b4f765211"},{url:"/_next/static/chunks/669-35c2a2ae52e31864.js",revision:"35c2a2ae52e31864"},{url:"/_next/static/chunks/986.c5f55a214a2095a7.js",revision:"c5f55a214a2095a7"},{url:"/_next/static/chunks/framework-a87821de553db91d.js",revision:"a87821de553db91d"},{url:"/_next/static/chunks/main-5035a05945ec0e6e.js",revision:"5035a05945ec0e6e"},{url:"/_next/static/chunks/pages/404-9a3507a784c77924.js",revision:"9a3507a784c77924"},{url:"/_next/static/chunks/pages/_app-687399ccd06ce9e7.js",revision:"687399ccd06ce9e7"},{url:"/_next/static/chunks/pages/_error-0a004b8b8498208d.js",revision:"0a004b8b8498208d"},{url:"/_next/static/chunks/pages/anime-49c49becb5acf2a3.js",revision:"49c49becb5acf2a3"},{url:"/_next/static/chunks/pages/index-b1ee1b62ebb09cad.js",revision:"b1ee1b62ebb09cad"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-7358e1231eba7782.js",revision:"7358e1231eba7782"},{url:"/_next/static/css/177f21f73782836e.css",revision:"177f21f73782836e"},{url:"/_next/static/css/1be7ec97b94d628f.css",revision:"1be7ec97b94d628f"},{url:"/_next/static/css/8310541359006e7c.css",revision:"8310541359006e7c"},{url:"/_next/static/css/86b868aeaf512c14.css",revision:"86b868aeaf512c14"},{url:"/_next/static/media/defaultAvatar.20579340.png",revision:"4aa4dc7ee7e3f768154414f8e5dd38e7"},{url:"/android/android-launchericon-144-144.png",revision:"fd5b794c391c4ec781fa79edd9ec0e64"},{url:"/android/android-launchericon-192-192.png",revision:"e4e5d29f9fb2da1f04b0e956f25a7d10"},{url:"/android/android-launchericon-48-48.png",revision:"8e10b7eb2e6949d9d45dc6f045cc22fd"},{url:"/android/android-launchericon-512-512.png",revision:"a81e18baaef32199f3399a40820a8927"},{url:"/android/android-launchericon-72-72.png",revision:"697c4f41f2067708f5747acb17eddb85"},{url:"/android/android-launchericon-96-96.png",revision:"c4576b9ad3f5ea67c219c1ca51bdb758"},{url:"/favicon.ico",revision:"2c2d8a1aee94c7b4f47d5017d53346fe"},{url:"/ios/100.png",revision:"573f232764fd1b561e89191b8ad5bc7f"},{url:"/ios/1024.png",revision:"28b3211b666aae371319b4a9ca9c9955"},{url:"/ios/114.png",revision:"87e5f0f27f64bd5ff4adb98d8fb0e596"},{url:"/ios/120.png",revision:"f2ee5e0133a004f766e8ee6e062330a6"},{url:"/ios/128.png",revision:"bce4f8b68359441187e51801a3ad112d"},{url:"/ios/144.png",revision:"fd5b794c391c4ec781fa79edd9ec0e64"},{url:"/ios/152.png",revision:"82a8a741db03e6d04ca755a70352c2ce"},{url:"/ios/16.png",revision:"8f4f07b2e1bc29f061b7f8540b362f09"},{url:"/ios/167.png",revision:"62855b38dede4176d7ad99ea6e5eeea1"},{url:"/ios/180.png",revision:"8d9d565285fbc22ab20bb67a6ace3118"},{url:"/ios/192.png",revision:"e4e5d29f9fb2da1f04b0e956f25a7d10"},{url:"/ios/20.png",revision:"36e30e659a7618c240277154eaf68937"},{url:"/ios/256.png",revision:"32e5baaef3c01131cc74c4edab1fb3b7"},{url:"/ios/29.png",revision:"c947d73851fa786b31006c1623641fc9"},{url:"/ios/32.png",revision:"2d44ef1f8689c681642ae4bcdf6303d2"},{url:"/ios/40.png",revision:"7757401a86173d18eb127009bdcfaa41"},{url:"/ios/50.png",revision:"24bd0ae26ceb4d4cdaa85848225462af"},{url:"/ios/512.png",revision:"a81e18baaef32199f3399a40820a8927"},{url:"/ios/57.png",revision:"1e555dbe0596cd729d5e20bcb0ff386b"},{url:"/ios/58.png",revision:"4a3726d1da1378005ce1e26fc27e85e2"},{url:"/ios/60.png",revision:"98a23a4cdad851ddfe28a9c860918205"},{url:"/ios/64.png",revision:"5577a2ddeaa15d3e962b1b3f8acfb04d"},{url:"/ios/72.png",revision:"697c4f41f2067708f5747acb17eddb85"},{url:"/ios/76.png",revision:"d21d30f3a4e09c67815f19524805fe24"},{url:"/ios/80.png",revision:"bda8cf13e734ddcad2720e373e3bad6a"},{url:"/ios/87.png",revision:"e5ad8a8ed1c0e28139823bfdb1801266"},{url:"/manifest.json",revision:"8e29ef2b254ea8695998d3e0caadcbb8"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"},{url:"/windows11/LargeTile.scale-100.png",revision:"ccb324d8b620b6450e5ac6082d75b158"},{url:"/windows11/LargeTile.scale-125.png",revision:"065e8be026a524fe1748f91e3762bddc"},{url:"/windows11/LargeTile.scale-150.png",revision:"f1e7a4141c5da83a6ce1bb2b2b4e9b4c"},{url:"/windows11/LargeTile.scale-200.png",revision:"4bc717b23aa2f7fb989c805be552ee60"},{url:"/windows11/LargeTile.scale-400.png",revision:"6dca4a67537a6cb4eace6daf2b1a62a8"},{url:"/windows11/SmallTile.scale-100.png",revision:"68ff6420c39d9f2c95906fc6a4bc782d"},{url:"/windows11/SmallTile.scale-125.png",revision:"8906e3ac726475237d37d83d61bc5c6d"},{url:"/windows11/SmallTile.scale-150.png",revision:"358b018bb287ed3617c889189fc926af"},{url:"/windows11/SmallTile.scale-200.png",revision:"900ccf1dacdfe5db4bb7069b1d980186"},{url:"/windows11/SmallTile.scale-400.png",revision:"c807ef226681896f35a8c9407e4430e4"},{url:"/windows11/SplashScreen.scale-100.png",revision:"261ac786498f358dc4a95bb64de55713"},{url:"/windows11/SplashScreen.scale-125.png",revision:"9eef6b5d8d7796ad68d83d7928f1072a"},{url:"/windows11/SplashScreen.scale-150.png",revision:"ee83ad2a5ebd74239635a517aefade95"},{url:"/windows11/SplashScreen.scale-200.png",revision:"95238821f98e9b850b40f829c45ea2d1"},{url:"/windows11/SplashScreen.scale-400.png",revision:"692b44de3d55efc80d2b5fc00a4cc3d6"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"c7b60f12384778f6a336a2c6c2d0b90d"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"8021b745bc2f820edb5a146973462b55"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"7a960255efab4c6ae0050c8d31099bcb"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"d6cc52181bac260072bd68ddfb152713"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"b6c39afe99d4f79d1f6d294db7981b9c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"a27a1611f803824f0933da2000fdab7a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"631fda630b216afea1144fe69f389f16"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"90aa5a5296345900e131736f726eb5e4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"d561bb926c7b0b19ec808b63ed97048a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"eec585171d04c61fbde564e7bf7b15c8"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"5c27266f8c780871945fba0c4339fa4e"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"781286cf8fe1b578497a3713edd0d90d"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"45f4152f735b8a58cbf83e1e8548f23a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"ef43a281d0a881f134b7b5e11b605e14"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"0fd52d2e9815bd02968d653cf60dd517"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"1268bffbd518ae9d0da3bf236b13709c"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"1a244a9f89ca16df1cc09536006687b2"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"312e8740c8eccb9f357a47712db1a2ce"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"e6fe5053bb2c7062fd72c03b396084b4"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"566c88b1430f5806efc5aaa03a8cfc1a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"a27a1611f803824f0933da2000fdab7a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"631fda630b216afea1144fe69f389f16"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"90aa5a5296345900e131736f726eb5e4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"d561bb926c7b0b19ec808b63ed97048a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"eec585171d04c61fbde564e7bf7b15c8"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"5c27266f8c780871945fba0c4339fa4e"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"781286cf8fe1b578497a3713edd0d90d"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"45f4152f735b8a58cbf83e1e8548f23a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"ef43a281d0a881f134b7b5e11b605e14"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"0fd52d2e9815bd02968d653cf60dd517"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"1268bffbd518ae9d0da3bf236b13709c"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"1a244a9f89ca16df1cc09536006687b2"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"312e8740c8eccb9f357a47712db1a2ce"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"e6fe5053bb2c7062fd72c03b396084b4"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"566c88b1430f5806efc5aaa03a8cfc1a"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"ef43a281d0a881f134b7b5e11b605e14"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"952e1b2fbd2b845b45625d762b7cb535"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"3c9c73f5747eb7cb20ce13e4a23374dd"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"24bd7aec9495656446225b798af35087"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"7e714e372d23957fc834ee83f2f28c8b"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"a27a1611f803824f0933da2000fdab7a"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"631fda630b216afea1144fe69f389f16"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"90aa5a5296345900e131736f726eb5e4"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"d561bb926c7b0b19ec808b63ed97048a"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"eec585171d04c61fbde564e7bf7b15c8"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"5c27266f8c780871945fba0c4339fa4e"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"781286cf8fe1b578497a3713edd0d90d"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"45f4152f735b8a58cbf83e1e8548f23a"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"ef43a281d0a881f134b7b5e11b605e14"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"0fd52d2e9815bd02968d653cf60dd517"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"1268bffbd518ae9d0da3bf236b13709c"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"1a244a9f89ca16df1cc09536006687b2"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"312e8740c8eccb9f357a47712db1a2ce"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"e6fe5053bb2c7062fd72c03b396084b4"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"566c88b1430f5806efc5aaa03a8cfc1a"},{url:"/windows11/StoreLogo.scale-100.png",revision:"24bd0ae26ceb4d4cdaa85848225462af"},{url:"/windows11/StoreLogo.scale-125.png",revision:"604386fc9db9edd5aff025ca70585bba"},{url:"/windows11/StoreLogo.scale-150.png",revision:"0cce5a66909577d5741e3ff3baa99b70"},{url:"/windows11/StoreLogo.scale-200.png",revision:"573f232764fd1b561e89191b8ad5bc7f"},{url:"/windows11/StoreLogo.scale-400.png",revision:"fe1e4d504fb150f15c666372971c840e"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"675e3847c0dad5dbb005f421967f55e3"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"94a156da600e6966b7d1b8a282eafe59"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"70d3724028dbe3b3c8f5caf3411b2439"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"261ac786498f358dc4a95bb64de55713"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"95238821f98e9b850b40f829c45ea2d1"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
