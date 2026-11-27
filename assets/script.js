function toggleLanguage() {
  const html = document.documentElement;
  const isArabic = html.lang === "ar";
  const nextLang = isArabic ? "en" : "ar";

  html.lang = nextLang;
  html.dir = nextLang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-ar]").forEach((el) => {
    el.textContent = el.getAttribute(
      nextLang === "ar" ? "data-ar" : "data-en"
    );
  });

  const button = document.querySelector(".lang");
  if (button) {
    button.textContent = nextLang === "ar" ? "English" : "العربية";
  }

  try {
    localStorage.setItem("siteLanguage", nextLang);
  } catch (e) {}
}

document.addEventListener("DOMContentLoaded", () => {
  let saved = "en";

  try {
    saved = localStorage.getItem("siteLanguage") || "en";
  } catch (e) {}

  const html = document.documentElement;
  html.lang = saved;
  html.dir = saved === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-ar]").forEach((el) => {
    el.textContent = el.getAttribute(
      saved === "ar" ? "data-ar" : "data-en"
    );
  });

  const button = document.querySelector(".lang");
  if (button) {
    button.textContent = saved === "ar" ? "English" : "العربية";
  }
});
