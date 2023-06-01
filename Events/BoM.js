var myVar = document.querySelector(".location");
//console.log(myVar);

var f1 = myVar.children[0];
 f1.textContent = location.href;

 var f2 = myVar.children[1];
 f2.textContent = location.port;

 var f3 = myVar.children[2];
 f3.textContent = location.protocol;

 var f5 = myVar.children[3];
 f5.textContent=location.hostname;

 var f4 = myVar.children[4];
 f5.textContent=location.pathname;

var visit = document.querySelector(".visit");
console.log(visit);
 visit.addEventListener("click",function(){
    location.assign("https://github.com/ABidhasan134");
});