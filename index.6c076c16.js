let e;function o(o=48.51029069230209,t=34.61206165767066){let n={lat:Number(o),lng:Number(t)};e=new google.maps.Map(document.getElementById("map"),{center:n,zoom:15});new google.maps.Marker({position:n,map:e,icon:"https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"})}window.initMap=o;const t=document.querySelector(".lat"),n=document.querySelector(".lng");document.querySelector("form").addEventListener("submit",(function(e){e.preventDefault();let l=Number(t.value),m=Number(n.value);console.log(l,m),o(l,m),formEl.reset()}));
//# sourceMappingURL=index.6c076c16.js.map