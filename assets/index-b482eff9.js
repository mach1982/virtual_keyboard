(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}})();i;document.querySelector("#app").innerHTML=`
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

`;let c=document.getElementById("textArea"),m=document.getElementById("q"),s=document.getElementById("w"),p=document.getElementById("e"),v=document.getElementById("r"),y=document.getElementById("t"),b=document.getElementById("y"),E=document.getElementById("u"),g=document.getElementById("i"),L=document.getElementById("o"),B=document.getElementById("p"),I=document.getElementById("a"),f=document.getElementById("s"),k=document.getElementById("d"),h=document.getElementById("f"),x=document.getElementById("g"),w=document.getElementById("h"),O=document.getElementById("j"),S=document.getElementById("k"),q=document.getElementById("l"),P=document.getElementById("semi-co"),A=document.getElementById("z"),C=document.getElementById("x"),N=document.getElementById("c"),a=document.getElementById("v"),R=document.getElementById("b"),j=document.getElementById("n"),z=document.getElementById("m"),F=document.getElementById("comma"),M=document.getElementById("fs"),H=document.getElementById("bs"),K=document.getElementById("space");c.value="";function t(d){d.type==="click"&&(console.log(d.target.value),c.value+=d.target.value)}m.addEventListener("click",t);s.addEventListener("click",t);p.addEventListener("click",t);v.addEventListener("click",t);y.addEventListener("click",t);b.addEventListener("click",t);E.addEventListener("click",t);g.addEventListener("click",t);L.addEventListener("click",t);B.addEventListener("click",t);I.addEventListener("click",t);f.addEventListener("click",t);k.addEventListener("click",t);h.addEventListener("click",t);x.addEventListener("click",t);w.addEventListener("click",t);O.addEventListener("click",t);S.addEventListener("click",t);q.addEventListener("click",t);P.addEventListener("click",t);A.addEventListener("click",t);C.addEventListener("click",t);N.addEventListener("click",t);a.addEventListener("click",t);a.addEventListener("click",t);R.addEventListener("click",t);j.addEventListener("click",t);z.addEventListener("click",t);F.addEventListener("click",t);M.addEventListener("click",t);H.addEventListener("click",t);K.addEventListener("click",t);
