
let currentLanguage = localStorage.getItem("alshomokh-language") || "en";
function setLanguage(lang){
  currentLanguage=lang;
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==="ar"?"rtl":"ltr";
  document.body.dir=lang==="ar"?"rtl":"ltr";
  document.querySelectorAll("[data-en][data-ar]").forEach(el=>{
    el.textContent=el.dataset[lang];
  });
  const button=document.querySelector(".lang");
  if(button) button.textContent=lang==="en"?"العربية":"English";
  localStorage.setItem("alshomokh-language",lang);
}
function toggleLanguage(){setLanguage(currentLanguage==="en"?"ar":"en")}
document.addEventListener("DOMContentLoaded",()=>setLanguage(currentLanguage));
