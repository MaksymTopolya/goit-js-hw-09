import"./assets/modulepreload-polyfill-3cfb730f.js";const a=document.querySelector(".feedback-form"),s=a.elements.email,m=a.elements.message;a.addEventListener("input",i);a.addEventListener("submit",r);function i(t){let e=s.value.trim(),l=m.value.trim(),o=JSON.stringify({email:e,message:l});localStorage.setItem("feedback-form-state",o)}function r(t){t.preventDefault();let e=s.value.trim(),l=m.value.trim();if(!e||!l){alert("Please fill in all form fields.");return}console.log({email:e,message:l}),a.reset(),localStorage.removeItem("feedback-form-state")}document.addEventListener("DOMContentLoaded",function(){let t=localStorage.getItem("feedback-form-state");if(t){let e=JSON.parse(t);s.value=e.email,m.value=e.message}});
//# sourceMappingURL=commonHelpers2.js.map
