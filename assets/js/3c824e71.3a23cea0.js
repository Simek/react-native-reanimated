"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[8608],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,h=u["".concat(d,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71986:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,a.kt)(i,(0,r.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This page was ported from an old version of the documentation."),(0,a.kt)("p",{parentName:"admonition"},"As we're rewriting the documentation some of the pages might be a little outdated."),(0,a.kt)("p",{parentName:"admonition"},"If you'd like to help with transition you can find guidelines in ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/contributing#helping-with-documentation"},"contributing guide"),".")))}l.isMDXComponent=!0},53415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var r=n(87462),a=(n(67294),n(3905)),o=n(71986);const i={sidebar_position:5},l="useHandler",d={unversionedId:"advanced/useHandler",id:"advanced/useHandler",title:"useHandler",description:"This is low-level hook returning context object and value indicating whether worklet should be rebuilt, which should be used in order to create custom event handler hook like useAnimatedGestureHandler or useAnimatedScrollHandler.",source:"@site/docs/advanced/useHandler.mdx",sourceDirName:"advanced",slug:"/advanced/useHandler",permalink:"/react-native-reanimated/docs/advanced/useHandler",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/advanced/useHandler.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"useEvent",permalink:"/react-native-reanimated/docs/advanced/useEvent"},next:{title:"useComposedEventHandler",permalink:"/react-native-reanimated/docs/advanced/useComposedEventHandler"}},s={},c=[{value:"Arguments",id:"arguments",level:3},{value:"<code>handlerOrHandlersObject</code> object with worklets",id:"handlerorhandlersobject-object-with-worklets",level:4},{value:"<code>dependencies</code> Array",id:"dependencies-array",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usehandler"},"useHandler"),(0,a.kt)(o.ZP,{mdxType:"DocsCompatibilityInfo"}),(0,a.kt)("p",null,"This is low-level hook returning context object and value indicating whether worklet should be rebuilt, which should be used in order to create custom event handler hook like ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedGestureHandler")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"useAnimatedScrollHandler"),"."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"handlerorhandlersobject-object-with-worklets"},(0,a.kt)("inlineCode",{parentName:"h4"},"handlerOrHandlersObject")," ","[object with worklets]"),(0,a.kt)("p",null,"Object containing custom keys matching native event names.\nThe values in the object should be individual worklets.\nEach of the worklet will be triggered when the corresponding event is dispatched on the connected animated component."),(0,a.kt)("p",null,"Each of the event worklets will receive the following parameters when called:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"event")," ","[object]"," - event object.\nThe payload can differ depending on the type of the event.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"context")," ","[object]"," - plain JS object that can be used to store some state.\nThis object will persist in between event occurrences and you can read and write any data to it.\nWhen there are several event handlers provided in a form of an object of worklets, the ",(0,a.kt)("inlineCode",{parentName:"p"},"context")," object will be shared in between the worklets allowing them to communicate with each other."))),(0,a.kt)("h4",{id:"dependencies-array"},(0,a.kt)("inlineCode",{parentName:"h4"},"dependencies")," ","[Array]"),(0,a.kt)("p",null,"Optional array of values which changes cause this hook to receive updated values during rerender of the wrapping component. This matters when, for instance, worklet uses values dependent on the component's state."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"dependencies")," here may be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"undefined"),"(argument skipped) - worklet will be rebuilt if there is any change in any of the callbacks' bodies or any values from their closure(variables from outer scope used in worklet),"),(0,a.kt)("li",{parentName:"ul"},"empty array(",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),") - worklet will be rebuilt only if any of the callbacks' bodies changes,"),(0,a.kt)("li",{parentName:"ul"},"array of values(",(0,a.kt)("inlineCode",{parentName:"li"},"[val1, val2, ..., valN]"),") - worklet will be rebuilt if there is any change in any of the callbacks bodies or in any values from the given array.")),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The hook returns a context that will be reused by event handlers and value that indicates whether worklets should be rebuilt. If different implementation is needed for web, ",(0,a.kt)("inlineCode",{parentName:"p"},"useWeb")," boolean is returned to check for web environment"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"function useAnimatedPagerScrollHandler(handlers, dependencies) {\n  const { context, doDependenciesDiffer, useWeb } = useHandler(handlers, dependencies);\n\n  return useEvent(\n    (event) => {\n      'worklet';\n      const { onPageScroll } = handlers;\n\n      if (onPageScroll && event.eventName.endsWith('onPageScroll')) {\n        onPageScroll(event, context);\n      }\n    },\n    ['onPageScroll'],\n    doDependenciesDiffer,\n  );\n")))}m.isMDXComponent=!0}}]);