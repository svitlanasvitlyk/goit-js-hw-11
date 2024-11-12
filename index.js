import{S as d,i as l}from"./assets/vendor-BrddEoy-.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function p(n){const o=`https://pixabay.com/api/?${n}`;return fetch(o).then(i=>{if(!i.ok)throw new Error(i.status);return i.json()})}let a=null;function f(n){const o=document.querySelector(".photo-list");o.innerHTML="";const i=n.map(t=>`
      <li class="photo-item">
        <a href="${t.largeImageURL}" class="gallery-item">
          <img src="${t.webformatURL}" alt="${t.tags}" width="360" height="152" />
        </a>
        <div class="info">
          <div class="info-item">
            <p>Likes</p>
            <p>${t.likes}</p>
          </div>
          <div class="info-item">
            <p>Views</p>
            <p>${t.views}</p>
          </div>
          <div class="info-item">
            <p>Comments</p>
            <p>${t.comments}</p>
          </div>
          <div class="info-item">
            <p>Downloads</p>
            <p>${t.downloads}</p>
          </div>
        </div>
      </li>`).join("");o.insertAdjacentHTML("beforeend",i),a?a.refresh():a=new d(".gallery-item",{captionsData:"alt",captionDelay:250})}const m=document.querySelector(".form"),u=document.querySelector(".search-input"),c=document.querySelector(".loader");m.addEventListener("submit",n=>{n.preventDefault();const o=u.value,i=document.querySelector(".photo-list");c.style.display="block";const t=new URLSearchParams({key:"47040880-6387dd83a064ed0d7a9fde087",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:9});p(t).then(e=>{c.style.display="none",u.value="",e.hits.length===0?(i.innerHTML="",l.error({title:"Error",message:"Sorry, no images found for your search. Try again!"})):f(e.hits)}).catch(e=>{c.style.display="none",l.error({title:"Error",message:`Something went wrong. Error: ${e.message}`})})});l.settings({timeout:1e4,position:"topRight",resetOnHover:!0,icon:"material-icons",transitionIn:"flipInX",transitionOut:"flipOutX",onOpening:function(){},onClosing:function(){}});
//# sourceMappingURL=index.js.map
