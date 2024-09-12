import{S as u,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector(".gallery"),d=r=>r.map(({webformatURL:s,largeImageURL:i,tags:o,likes:e,views:t,comments:n,downloads:p})=>`
<li class="card">
<a href="${i}">
<img src="${s}" class="image" height="200px" width="360px" alt="${o}" />
</a>
<div class="informations">
    <div class="current-info">
    <p class="title-info">Likes</p>
    <p class="count">${e}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Views</p>
      <p class="count">${t}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Comments</p>
      <p class="count">${n}</p>
  </div>
  <div class="current-info">
      <p class="title-info">Downloads</p>
      <p class="count">${p}</p>
  </div>
</div>
</li>`),f=r=>{c.innerHTML="",c.insertAdjacentHTML("beforeend",d(r).join(""))},m="45921559-66c2b9b15ee0f1bc0f2b1e46c",h="https://pixabay.com/api/";function g(r){r.preventDefault();const s=r.currentTarget.elements.searchText.value;if(!s)return b();const i=new URLSearchParams({key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});a(),fetch(`${h}?${i}`).then(o=>o.json()).then(o=>{if(console.log(o.hits),!o.hits.length)return v();f(o.hits),L.refresh()}).catch(o=>console.log(o)).finally(()=>a()),r.currentTarget.reset()}const y=document.querySelector(".searchImg"),b=()=>l.show({message:"Input is empty!",position:"topRight",icon:"ico-warning",backgroundColor:"orangered",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"432px"}),v=()=>l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageSize:"16",messageColor:"#fff",theme:"dark",maxWidth:"350px",icon:"ico-error"});y.addEventListener("submit",g);const L=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250}),a=()=>document.querySelector("span").classList.toggle("loader");
//# sourceMappingURL=index.js.map
