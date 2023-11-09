(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();document.querySelector("#app").innerHTML=`
<div>
      <textarea id="textArea">
      
      </textarea>
  </div>
    
    
    <div class="topRow">
      <input id="q" type="button" value="q">
      <input id="w" type="button" value="w">
      <input id="e" type="button" value="e">
      <input id="r" type="button" value="r">
      <input id="t" type="button" value="t">
      <input id="y" type="button" value="y">
      <input id="u" type="button" value="u">
      <input id="i" type="button" value="i">
      <input id="o" type="button" value="o">
      <input id="p" type="button" value="p">

    </div>
    
    <div class="homeRow">
      <input id="a" type="button" value="a">
      <input id="s" type="button" value="s">
      <input id="d" type="button" value="d">
      <input id="f" type="button" value="f">
      <input id="g" type="button" value="g">
      <input id="h" type="button" value="h">
      <input id="j" type="button" value="j">
      <input id="k" type="button" value="k">
      <input id="l" type="button" value="l">
      <input id="semi-co" type="button" value=";">
    </div>

    <div class="bottomRow">
      <input id="z" type="button" value="z">
      <input id="x" type="button" value="x">
      <input id="c" type="button" value="c">
      <input id="v" type="button" value="v">
      <input id="b" type="button" value="b">
      <input id="n" type="button" value="n">
      <input id="m" type="button" value="m">
      <input id="comma" type="button" value=",">
      <input id="fs" type="button" value=".">
      <input id="bs" type="button" value="/">
    </div>

    <div>
    <input id="space" type="button" value=" ">
    </div>

`;let o=document.getElementById("textArea"),r=document.getElementById("q"),m=document.getElementById("w"),s=document.getElementById("e"),p=document.getElementById("r"),v=document.getElementById("t"),y=document.getElementById("y"),b=document.getElementById("u"),E=document.getElementById("i"),g=document.getElementById("o"),L=document.getElementById("p"),B=document.getElementById("a"),I=document.getElementById("s"),f=document.getElementById("d"),k=document.getElementById("f"),h=document.getElementById("g"),x=document.getElementById("h"),w=document.getElementById("j"),O=document.getElementById("k"),S=document.getElementById("l"),q=document.getElementById("semi-co"),P=document.getElementById("z"),A=document.getElementById("x"),C=document.getElementById("c"),c=document.getElementById("v"),N=document.getElementById("b"),R=document.getElementById("n"),j=document.getElementById("m"),z=document.getElementById("comma"),F=document.getElementById("fs"),M=document.getElementById("bs"),H=document.getElementById("space");o.value="";function t(d){d.type==="click"&&(console.log(d.target.value),o.value+=d.target.value)}r.addEventListener("click",t);m.addEventListener("click",t);s.addEventListener("click",t);p.addEventListener("click",t);v.addEventListener("click",t);y.addEventListener("click",t);b.addEventListener("click",t);E.addEventListener("click",t);g.addEventListener("click",t);L.addEventListener("click",t);B.addEventListener("click",t);I.addEventListener("click",t);f.addEventListener("click",t);k.addEventListener("click",t);h.addEventListener("click",t);x.addEventListener("click",t);w.addEventListener("click",t);O.addEventListener("click",t);S.addEventListener("click",t);q.addEventListener("click",t);P.addEventListener("click",t);A.addEventListener("click",t);C.addEventListener("click",t);c.addEventListener("click",t);c.addEventListener("click",t);N.addEventListener("click",t);R.addEventListener("click",t);j.addEventListener("click",t);z.addEventListener("click",t);F.addEventListener("click",t);M.addEventListener("click",t);H.addEventListener("click",t);
