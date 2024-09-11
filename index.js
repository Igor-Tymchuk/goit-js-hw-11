import{i as c,S as u}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const a=document.querySelector(".gallery"),d=i=>i.map(({webformatURL:o,largeImageURL:s,tags:r,likes:e,views:t,comments:n,downloads:p})=>`
<div class="card">
<a href="${s}"><img class="image" src="${o}" data-img="${s}" height="200px" width="360px" alt="${r}" /></a>
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
</div>`),f="45921559-66c2b9b15ee0f1bc0f2b1e46c",l=document.querySelector(".searchImg"),m=i=>{i.preventDefault();const o=i.currentTarget.elements.searchText.value;if(!o)return c.warning({message:"Input is empty!",position:"topRight"});const s=new URLSearchParams({key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});fetch(`https://pixabay.com/api/?${s}`).then(r=>r.json()).then(r=>{if(console.log(r.hits),!r.hits.length)return c.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});const e=d(r.hits).join("");a.innerHTML="",a.insertAdjacentHTML("beforeend",e)}),l.reset()};l.addEventListener("submit",m);const h=new u(".gallery a",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});h.on("show.simplelightbox");
//# sourceMappingURL=index.js.map
