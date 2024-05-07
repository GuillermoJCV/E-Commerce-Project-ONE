import{R as c,r as h,j as t}from"./index-C41oWplu.js";var y={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=c.createContext&&c.createContext(y),w=["attr","size","title"];function P(e,r){if(e==null)return{};var n=z(e,r),s,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)s=i[a],!(r.indexOf(s)>=0)&&Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}function z(e,r){if(e==null)return{};var n={},s=Object.keys(e),a,i;for(i=0;i<s.length;i++)a=s[i],!(r.indexOf(a)>=0)&&(n[a]=e[a]);return n}function u(){return u=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e},u.apply(this,arguments)}function g(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,s)}return n}function d(e){for(var r=1;r<arguments.length;r++){var n=arguments[r]!=null?arguments[r]:{};r%2?g(Object(n),!0).forEach(function(s){C(e,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach(function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(n,s))})}return e}function C(e,r,n){return r=E(r),r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function E(e){var r=S(e,"string");return typeof r=="symbol"?r:String(r)}function S(e,r){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var s=n.call(e,r||"default");if(typeof s!="object")return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function N(e){return e&&e.map((r,n)=>c.createElement(r.tag,d({key:n},r.attr),N(r.child)))}function o(e){return r=>c.createElement(V,u({attr:d({},e.attr)},r),N(e.child))}function V(e){var r=n=>{var{attr:s,size:a,title:i}=e,O=P(e,w),m=a||n.size||"1em",l;return n.className&&(l=n.className),e.className&&(l=(l?l+" ":"")+e.className),c.createElement("svg",u({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,s,O,{className:l,style:d(d({color:e.color||n.color},n.style),e.style),height:m,width:m,xmlns:"http://www.w3.org/2000/svg"}),i&&c.createElement("title",null,i),e.children)};return f!==void 0?c.createElement(f.Consumer,null,n=>r(n)):r(y)}function j(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"},child:[]}]})(e)}function p(e){return o({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"},child:[]}]})(e)}function v(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256,8C119.1,8,8,119.1,8,256S119.1,504,256,504,504,392.9,504,256,392.9,8,256,8ZM185.3,380a124,124,0,0,1,0-248c31.3,0,60.1,11,83,32.3l-33.6,32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9,0-77.2,35.5-77.2,78.1S142.3,334,185.3,334c32.6,0,64.9-19.1,70.1-53.3H185.3V238.1H302.2a109.2,109.2,0,0,1,1.9,20.7c0,70.8-47.5,121.2-118.8,121.2ZM415.5,273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5Z"},child:[]}]})(e)}function x(e){return o({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"},child:[]}]})(e)}function b(e){return o({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"},child:[]}]})(e)}const R=()=>{const e=h.useRef(null),r=h.useRef(null),n=i=>{i.preventDefault()};h.useEffect(()=>{const i=r.current;if(i)return i.addEventListener("submit",n),()=>{i.removeEventListener("submit",n)}},[]);const s=()=>{e.current.classList.add("active"),e.current.classList.remove("show-sign-in");const i=e.current.querySelector("p");i&&(i.style.display="block")},a=()=>{e.current.classList.remove("active"),e.current.classList.add("show-sign-in")};return t.jsxs("main",{className:"main",ref:e,children:[t.jsx("section",{className:"form-container sign-in",children:t.jsxs("form",{ref:r,children:[t.jsx("h1",{children:"Iniciar Sesión"}),t.jsxs("div",{className:"social-icons",children:[t.jsx("a",{href:"#",className:"icon",children:t.jsx(v,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(j,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(b,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(x,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(p,{})})]}),t.jsx("span",{children:"Puede usar su correo electrónico"}),t.jsx("input",{type:"email",placeholder:"Ingresar el correo",required:!0}),t.jsx("input",{type:"password",placeholder:"Ingresar la contraseña",required:!0}),t.jsx("a",{className:"a",href:"#",children:"¿Olvidaste tu contraseña?"}),t.jsx("button",{id:"bt-sign-in",type:"submit",children:"Iniciar Sesión"})]})}),t.jsx("section",{className:"form-container sign-up",children:t.jsxs("form",{children:[t.jsx("h1",{children:"Crear cuenta"}),t.jsxs("div",{className:"social-icons",children:[t.jsx("a",{href:"#",className:"icon",children:t.jsx(v,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(j,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(b,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(x,{})}),t.jsx("a",{href:"#",className:"icon",children:t.jsx(p,{})})]}),t.jsx("span",{children:"Puede usar su correo electrónico"}),t.jsx("input",{type:"text",placeholder:"Name",required:!0}),t.jsx("input",{type:"email",placeholder:"Email",required:!0}),t.jsx("input",{type:"password",placeholder:"Password",required:!0}),t.jsx("button",{type:"submit",children:"Registrarse"})]})}),t.jsx("div",{className:"toggle-container",children:t.jsxs("div",{className:"toggle",children:[t.jsxs("div",{className:"toggle-panel toggle-left",children:[t.jsx("h1",{children:"Bienvenido de nuevo"}),t.jsx("p",{children:" Ingrese sus datos personales para utilizar todas las funciones del sitio"}),t.jsx("button",{className:"hidden",onClick:a,children:"Iniciar Sesión"})]}),t.jsxs("div",{className:"toggle-panel toggle-right",children:[t.jsx("h1",{children:"Bienvenido"}),t.jsx("p",{children:"Registre sus datos personales para utilizar todas las funciones del sitio"}),t.jsx("button",{className:"hidden",onClick:s,children:"Registrarse"})]})]})})]})};export{R as default};
