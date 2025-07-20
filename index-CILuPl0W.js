(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const i of l.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(r){if(r.ep)return;r.ep=!0;const l=o(r);fetch(r.href,l)}})();function y(t,e,o){const n=Math.floor(t/255*100),r=Math.floor(e/255*100),l=Math.floor(o/255*100);return{r:n,g:r,b:l}}function B(t,e,o){const n=r=>Number(r).toString(16).padStart(2,"0");return`#${n(t)}${n(e)}${n(o)}`}const a=(t,e=document)=>e.querySelector(t),R=(t,e=document)=>e.querySelectorAll(t),c=a("#red"),g=a("#red-percentage"),G=a("#errorRedInput"),u=a("#green"),h=a("#green-percentage"),k=a("#errorGreenInput"),d=a("#blue"),m=a("#blue-percentage"),C=a("#errorBlueInput"),b=a("#converter"),s=a("#colorPreview"),f=a("#rgbToPercentage"),E=R("[data-i18n]"),w="es",v={en:{"app.title":"RGB to Percentage Converter","button.convert":"Convert to Percentage","card.subtitle":"Enter RGB values and get the equivalent percentages","card.title":"Color Converter","examples.title":'<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"/><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg> Common Examples',"examples.black":"Black:","examples.gray":"Medium Gray:","examples.red":"Red:","examples.white":"White:","footer.subtitle":"Free tool for designers and developers","footer.title":"RGB to Percentage Converter","header.title":"RGB to Percentage Converter","info.how":'<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> How does it work?',"info.line1":"• RGB values range from 0 to 255","info.line2":"• Percentages range from 0% to 100%","info.line3":"• Formula: (RGB value ÷ 255) × 100","info.line4":"• Example: 128 = (128 ÷ 255) × 100 = 50.2%","label.blue":"Blue (B)","label.green":"Green (G)","label.preview":"Color Preview","label.red":"Red (R)","output.blue":"Blue (%)","output.combined":"RGB as Percentages","output.green":"Green (%)","output.red":"Red (%)","section.input":"RGB Values","section.output":"Result"},es:{"app.title":"Convertidor RGB a Porcentaje","button.convert":"Convertir a Porcentaje","card.subtitle":"Ingresa los valores RGB y obtén los porcentajes equivalentes","card.title":"Convertidor de Color","examples.title":'<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"/><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg> Ejemplos comunes',"examples.black":"Negro:","examples.gray":"Gris:","examples.red":"Rojo:","examples.white":"Blanco:","footer.subtitle":"Herramienta gratuita para diseñadores y desarrolladores","footer.title":"Convertidor RGB a Porcentaje","header.title":"Convertidor RGB a Porcentaje","info.how":'<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> ¿Cómo funciona?',"info.line1":"Los valores RGB van de 0 a 255","info.line2":"Los porcentajes van de 0% a 100%","info.line3":"Fórmula: (valor RGB ÷ 255) × 100","info.line4":"Ejemplo: 128 = (128 ÷ 255) × 100 = 50.2%","label.blue":"Azul (B)","label.green":"Verde (G)","label.preview":"Vista previa del color","label.red":"Rojo (R)","output.blue":"Azul (%)","output.combined":"RGB en porcentajes","output.green":"Verde (%)","output.red":"Rojo (%)","section.input":"Valores RGB","section.output":"Resultado"},fr:{"app.title":"Convertisseur RGB en Pourcentage","button.convert":"Convertir en Pourcentage","card.subtitle":"Entrez les valeurs RGB et obtenez les pourcentages équivalents","card.title":"Convertisseur de Couleur","examples.title":'<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="currentColor"><path d="M20.385 2.879a3 3 0 0 0-4.243 0L14.02 5l-.707-.708a1 1 0 1 0-1.414 1.415l5.657 5.656A1 1 0 0 0 18.97 9.95l-.707-.707l2.122-2.122a3 3 0 0 0 0-4.242"/><path fill-rule="evenodd" d="M11.93 7.091L4.152 14.87a3 3 0 0 0-.587 3.415L2 19.85l1.414 1.415l1.565-1.566a3 3 0 0 0 3.415-.586l7.778-7.778zm1.414 4.243L11.93 9.92l-6.364 6.364a1 1 0 0 0 1.414 1.414z" clip-rule="evenodd"></path></g></svg> Exemples courants',"examples.black":"Noir :","examples.gray":"Gris moyen :","examples.red":"Rouge :","examples.white":"Blanc :","footer.subtitle":"Outil gratuit pour les designers et développeurs","footer.title":"Convertisseur RGB en Pourcentage","header.title":"Convertisseur RGB en Pourcentage","info.how":'<svg class="text-primary mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> Comment ça fonctionne ?',"info.line1":"Les valeurs RGB vont de 0 à 255","info.line2":"Les pourcentages vont de 0% à 100%","info.line3":"Formule : (valeur RGB ÷ 255) × 100","info.line4":"Exemple : 128 = (128 ÷ 255) × 100 = 50,2%","label.blue":"Bleu (B)","label.green":"Vert (G)","label.preview":"Aperçu de la couleur","label.red":"Rouge (R)","output.blue":"Bleu (%)","output.combined":"RGB en pourcentages","output.green":"Vert (%)","output.red":"Rouge (%)","section.input":"Valeurs RGB","section.output":"Résultat"}};function P(t){return function(o){return v[t][o]||v[w][o]}}const L=`:host {
  position: absolute;
}

.toast {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 20rem; /* max-w-xs */
  padding: 1rem;
  color: lightdark(); /* text-gray-500 */
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.toast-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  color: #3b82f6; /* text-blue-500 */
  background-color: #dbeafe; /* bg-blue-100 */
  border-radius: 0.5rem;
}

.toast-icon-svg {
  width: 1rem;
  height: 1rem;
}

.toast-message {
  margin-inline-start: 0.75rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: inherit;
}

.toast-close {
  margin-inline-start: auto;
  margin-inline-end: -0.375rem;
  margin-block: -0.375rem;
  padding: 0.375rem;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
  background-color: #ffffff;
  color: #9ca3af; /* text-gray-400 */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
}

.toast-close:hover {
  background-color: #f3f4f6; /* hover:bg-gray-100 */
  color: #111827; /* hover:text-gray-900 */
}

.toast-close:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px #d1d5db; /* focus:ring-gray-300 */
}

.toast-close-icon {
  width: 0.75rem;
  height: 0.75rem;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (prefers-color-scheme: dark) {
  .toast {
    background-color: #1f2937; /* dark:bg-gray-800 */
    color: #9ca3af; /* dark:text-gray-400 */
  }

  .toast-icon {
    background-color: #1e40af; /* dark:bg-blue-800 */
    color: #bfdbfe; /* dark:text-blue-200 */
  }

  .toast-close {
    background-color: #1f2937; /* dark:bg-gray-800 */
    color: #6b7280; /* dark:text-gray-500 */
  }

  .toast-close:hover {
    background-color: #374151; /* dark:hover:bg-gray-700 */
    color: #ffffff; /* dark:hover:text-white */
  }
}
`,$=`<svg
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="16"
>
  <path
    fill="currentColor"
    d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12z"
  />
</svg>
`;class p extends HTMLElement{message="";position="";constructor(){super(),this.attachShadow({mode:"open"})}static get observedAttributes(){return["position","message"]}static get styles(){return L}connectedCallback(){this.message=this.getAttribute("message")||"",this.position=this.getAttribute("position"),this.render(),this.setPosition()}attributeChangedCallback(e,o,n){if(o!==n)switch(e){case"position":this.position=n,this.setPosition();break;case"message":this.message=n,this.render(),this.setPosition();break}}setPosition(){const e=this.shadowRoot.host,o={"top-left":{top:"1rem",left:"1rem"},"top-center":{top:"1rem",left:"50%",transform:"translateX(-50%)"},"top-right":{top:"1rem",right:"1rem"},"bottom-left":{bottom:"0.75rem",left:"0.50rem"},"bottom-center":{bottom:"1rem",left:"50%",transform:"translateX(-50%)"},"bottom-right":{bottom:"0.75rem",right:"2.5rem"}};e.style.top="",e.style.bottom="",e.style.left="",e.style.right="",e.style.transform="";const n=o[this.position];n&&Object.entries(n).forEach(([r,l])=>{e.style[r]=l})}render(){this.shadowRoot.innerHTML=`
    <style>${p.styles}</style>
    <div id="toast-default" class="toast" role="alert">
      <div class="toast-icon">
        ${$}
        <span class="sr-only">Copy icon</span>
      </div>
      <div class="toast-message">${this.message}</div>
    </div>
    `}}customElements.define("toast-wc",p);if(s==null)throw Error("");s.setAttribute("data-color","#000000");function M(){return(navigator.language||navigator.languages[0]||w).split("-")[0]}const j=P(M());Array.from(E).map(t=>{const{i18n:e}=t.dataset,o=j(e);console.log(o),o.startsWith("<svg")?t.innerHTML=o:t.textContent=o});if(b==null)throw Error("");function A(){if(c==null||u==null||d==null||g==null||h==null||m==null||G==null||k==null||C==null||f==null||s==null)throw Error("");const t=y(parseInt(c.value),parseInt(u.value),parseInt(d.value));g.value=t.r.toString().concat("%"),h.value=t.g.toString().concat("%"),m.value=t.b.toString().concat("%"),f.value=`red: ${t.r}% green: ${t.g}% blue: ${t.b}%`;const e=B(c.value,u.value,d.value);s.setAttribute("data-color",e),s.style.setProperty("--bg-hex-color",e)}b.addEventListener("click",A);let x;function z(){const t=s?.getAttribute("data-color"),e=document.createElement("toast-wc");if(t==null)throw Error("");e.setAttribute("message",`Copied color ${t}`),e.setAttribute("position","bottom-right"),document.body.insertAdjacentElement("afterbegin",e),navigator.clipboard.writeText(t),x=setTimeout(()=>{e.remove()},2e3)}clearTimeout(x);s?.addEventListener("click",z);
