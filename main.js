(()=>{"use strict";const e=document.querySelector("div");document.getElementById("searchButton").addEventListener("click",(()=>{!async function(){const t=document.getElementById("searchbar").value,n=await fetch(`https://api.weatherapi.com/v1/current.json?key=6425748fc6174f0882a173729241001&q=${t}`,{mode:"cors"}),c=await n.json();e.innerHTML=`the current temperature in ${t} \n        is ${c.current.temp_f}° and it feels like \n        ${c.current.feelslike_f}° Condition: ${c.current.condition.text}`,console.log(c)}()}))})();