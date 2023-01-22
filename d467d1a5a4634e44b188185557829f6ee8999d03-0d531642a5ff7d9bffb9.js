"use strict";(self.webpackChunksantitfg_github_io=self.webpackChunksantitfg_github_io||[]).push([[257],{3204:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let n=0;n<e.length;n++){const l=e[n];t&&/[a-zA-Z]/.test(l)&&l.toUpperCase()===l?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(l)&&l.toLowerCase()===l?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=l.toLowerCase()===l&&l.toUpperCase()!==l,r=a,a=l.toUpperCase()===l&&l.toLowerCase()!==l)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8032:function(e,t,a){a.d(t,{G:function(){return A},L:function(){return p},M:function(){return w},P:function(){return E},_:function(){return i},a:function(){return s},b:function(){return m},g:function(){return u},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),l=a.n(n);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t.indexOf(a=l[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,n){return void 0===n&&(n={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},n,{opacity:t?1:0})})}function u(e,t,a,r,n,l,i,o){const c={};l&&(c.backgroundColor=l,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=l,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),o&&(c.objectPosition=o);const m=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const d=["children"],g=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=i(e,d);return r.createElement(r.Fragment,null,r.createElement(g,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:n,alt:l="",shouldLoad:o}=e,c=i(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:l}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,l=i(e,h);const o=l.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,s({},l,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:l}=e;return r.createElement("source",{key:t+"-"+l+"-"+a,type:l,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var M;y.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const N=["fallback"],E=function(e){let{fallback:t}=e,a=i(e,N);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(M=b.propTypes)?void 0:M.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const w=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=b.propTypes;const L=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],I=["style","className"],j=e=>e.replace(/\n/g,""),x=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),s=3;s<r;s++)n[s-3]=arguments[s];return e.alt||""===e.alt?l().string.apply(l(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},k={image:l().object.isRequired,alt:x},D=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],v=["style","className"],C=new Set;let T,S;const z=function(e){let{as:t="div",image:n,style:l,backgroundColor:m,className:u,class:d,onStartLoad:g,onLoad:p,onError:f}=e,h=i(e,D);const{width:y,height:b,layout:M}=n,N=c(y,b,M),{style:E,className:w}=N,L=i(N,v),I=(0,r.useRef)(),j=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);d&&(u=d);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(M,y,b);return(0,r.useEffect)((()=>{T||(T=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return S=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=I.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void C.add(j);if(S&&C.has(j))return;let t,r;return T.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;I.current&&(I.current.innerHTML=a(s({isLoading:!0,isLoaded:C.has(j),image:n},h)),C.has(j)||(t=requestAnimationFrame((()=>{I.current&&(r=i(I.current,j,C,l,g,p,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{C.has(j)&&S&&(I.current.innerHTML=S(s({isLoading:C.has(j),isLoaded:C.has(j),image:n},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[n]),(0,r.createElement)(t,s({},L,{style:s({},E,l,{backgroundColor:m}),className:w+(u?" "+u:""),ref:I,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},A=(0,r.memo)((function(e){return e.image?(0,r.createElement)(z,e):null}));A.propTypes=k,A.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function U(e){return function(t){let{src:a,__imageData:n,__error:l}=t,o=i(t,O);return l&&console.warn(l),n?r.createElement(e,s({image:n},o)):(console.warn("Image not loaded",a),null)}}const _=U((function(e){let{as:t="div",className:a,class:n,style:l,image:o,loading:d="lazy",imgClassName:g,imgStyle:f,backgroundColor:h,objectFit:y,objectPosition:b}=e,M=i(e,L);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=s({objectFit:y,objectPosition:b,backgroundColor:h},f);const{width:N,height:x,layout:k,images:D,placeholder:v,backgroundColor:C}=o,T=c(N,x,k),{style:S,className:z}=T,A=i(T,I),O={fallback:void 0,sources:[]};return D.fallback&&(O.fallback=s({},D.fallback,{srcSet:D.fallback.srcSet?j(D.fallback.srcSet):void 0})),D.sources&&(O.sources=D.sources.map((e=>s({},e,{srcSet:j(e.srcSet)})))),r.createElement(t,s({},A,{style:s({},S,l,{backgroundColor:h}),className:z+(a?" "+a:"")}),r.createElement(p,{layout:k,width:N,height:x},r.createElement(E,s({},u(v,!1,k,N,x,C,y,b))),r.createElement(w,s({"data-gatsby-image-ssr":"",className:g},M,m("eager"===d,!1,O,d,f)))))})),Q=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?l().number.apply(l(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},P=new Set(["fixed","fullWidth","constrained"]),G={src:l().string.isRequired,alt:x,width:Q,height:Q,sizes:l().string,layout:e=>{if(void 0!==e.layout&&!P.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};_.displayName="StaticImage",_.propTypes=G;const R=U(A);R.displayName="StaticImage",R.propTypes=G},7302:function(e,t,a){var r=a(1883),n=a(8032),l=a(7294);t.Z=e=>{const{data:t}=e;var a=void 0;return t.frontmatter.image&&(a=l.createElement(n.G,{className:"  w-full h-full object-cover rounded-none md:rounded-3xl  ",image:t.frontmatter.image.childImageSharp.gatsbyImageData,alt:t.frontmatter.title})),l.createElement("div",{className:"relative inline-block  rounded-none md:rounded-3xl  aspect-video "},l.createElement(r.Link,{to:t.fields.slug,className:" "},l.createElement("div",{className:"absolute z-10 inset-0  w-full h-full animacion-tarjeta rounded-none md:rounded-3xl gradiente-principal flex justify-center  items-center"},l.createElement("div",{className:"  text-xl  text-col-txt text-justify font-bold m-14  "},t.frontmatter.title)),a))}},8957:function(e,t,a){a.d(t,{Z:function(){return m}});var r=a(7294),n=a(1883),l=a.p+"static/gitlab-logo-500-a069418ec936366f20ad020c9889dc84.png",s="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTgiIGhlaWdodD0iOTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik00OC44NTQgMEMyMS44MzkgMCAwIDIyIDAgNDkuMjE3YzAgMjEuNzU2IDEzLjk5MyA0MC4xNzIgMzMuNDA1IDQ2LjY5IDIuNDI3LjQ5IDMuMzE2LTEuMDU5IDMuMzE2LTIuMzYyIDAtMS4xNDEtLjA4LTUuMDUyLS4wOC05LjEyNy0xMy41OSAyLjkzNC0xNi40Mi01Ljg2Ny0xNi40Mi01Ljg2Ny0yLjE4NC01LjcwNC01LjQyLTcuMTctNS40Mi03LjE3LTQuNDQ4LTMuMDE1LjMyNC0zLjAxNS4zMjQtMy4wMTUgNC45MzQuMzI2IDcuNTIzIDUuMDUyIDcuNTIzIDUuMDUyIDQuMzY3IDcuNDk2IDExLjQwNCA1LjM3OCAxNC4yMzUgNC4wNzQuNDA0LTMuMTc4IDEuNjk5LTUuMzc4IDMuMDc0LTYuNi0xMC44MzktMS4xNDEtMjIuMjQzLTUuMzc4LTIyLjI0My0yNC4yODMgMC01LjM3OCAxLjk0LTkuNzc4IDUuMDE0LTEzLjItLjQ4NS0xLjIyMi0yLjE4NC02LjI3NS40ODYtMTMuMDM4IDAgMCA0LjEyNS0xLjMwNCAxMy40MjYgNS4wNTJhNDYuOTcgNDYuOTcgMCAwIDEgMTIuMjE0LTEuNjNjNC4xMjUgMCA4LjMzLjU3MSAxMi4yMTMgMS42MyA5LjMwMi02LjM1NiAxMy40MjctNS4wNTIgMTMuNDI3LTUuMDUyIDIuNjcgNi43NjMuOTcgMTEuODE2LjQ4NSAxMy4wMzggMy4xNTUgMy40MjIgNS4wMTUgNy44MjIgNS4wMTUgMTMuMiAwIDE4LjkwNS0xMS40MDQgMjMuMDYtMjIuMzI0IDI0LjI4MyAxLjc4IDEuNTQ4IDMuMzE2IDQuNDgxIDMuMzE2IDkuMTI2IDAgNi42LS4wOCAxMS44OTctLjA4IDEzLjUyNiAwIDEuMzA0Ljg5IDIuODUzIDMuMzE2IDIuMzY0IDE5LjQxMi02LjUyIDMzLjQwNS0yNC45MzUgMzMuNDA1LTQ2LjY5MUM5Ny43MDcgMjIgNzUuNzg4IDAgNDguODU0IDB6IiBmaWxsPSIjMjQyOTJmIi8+PC9zdmc+",i=a.p+"static/Instagram_Glyph_Gradient-7618c0fff7b3af6bac2af15c37f994c1.png",o=a.p+"static/icon-fd6c8b170dc6477d570b388577bef440.png";var c=()=>{const{0:e,1:t}=(0,r.useState)(!0);return r.createElement(r.Fragment,null,r.createElement("nav",{className:" sm:flex flex-wrap pt-3 md:pb-4 md:pt-8  md:px-8 lg:px-10 justify-between"},r.createElement("div",{className:"block sm:flex "},r.createElement("div",{className:"flex justify-between  "},r.createElement(n.Link,{to:"/",className:"p-4  font-bold "},r.createElement("img",{src:o,alt:"icono",className:"w-14 h-14"})),r.createElement("button",{onClick:()=>{t(!e)},className:"sm:hidden inline-block p-4"},e?"MENU":"X")),r.createElement("ul",{className:"p-4 text-center text-2xl font-bold sm:ml-10 "+(e?" hidden":"block sm:hidden")},r.createElement("li",null,r.createElement(n.Link,{to:"/about",className:"block mt-4 sm:inline-block sm:mt-0 text-teal gradiente-link  mr-4"},"Sobre mi"))),r.createElement("ul",{className:"p-4 text-center text-2xl font-bold sm:ml-10 hidden  sm:flex"},r.createElement("li",null,r.createElement(n.Link,{to:"/about",className:"block mt-4 sm:inline-block sm:mt-0 text-teal gradiente-link  mr-4"},"Sobre mi")))),r.createElement("ul",{className:"p-4 text-center text-2xl font-bold "+(e?" hidden":"flex justify-center sm:hidden")},r.createElement("a",{href:"https://www.instagram.com/elsonidodelascosas/",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:i,alt:"Instagram",className:"w-10 h-10"})),r.createElement("a",{href:"https://gitlab.com/stfg.prof",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:l,alt:"Gitlab",className:"w-10 h-10"})),r.createElement("a",{href:"https://github.com/santitfg",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:s,alt:"Github",className:"w-10 h-10"}))),r.createElement("ul",{className:"p-4 text-center text-2xl font-bold  hidden sm:flex sm:justify-center"},r.createElement("a",{href:"https://www.instagram.com/elsonidodelascosas/",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:i,alt:"Instagram",className:"w-10 h-10"})),r.createElement("a",{href:"https://gitlab.com/stfg.prof",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:l,alt:"Gitlab",className:"w-10 h-10"})),r.createElement("a",{href:"https://github.com/santitfg",target:"_blank",rel:"noopener noreferrer",className:"block mt-4 sm:inline-block sm:mt-0 text-teal   mr-4"},r.createElement("img",{src:s,alt:"Github",className:"w-10 h-10"})))))};var m=e=>r.createElement(r.Fragment,null,r.createElement("header",null,r.createElement(c,null)),r.createElement("div",{className:"p-5"}),e.children,r.createElement("footer",{className:"container mx-auto text-justify"},r.createElement("div",{className:"p-4"}),r.createElement("hr",{className:"border-solid border-top-2 border-principal "}),r.createElement("div",{className:"p-6"})))}}]);
//# sourceMappingURL=d467d1a5a4634e44b188185557829f6ee8999d03-0d531642a5ff7d9bffb9.js.map