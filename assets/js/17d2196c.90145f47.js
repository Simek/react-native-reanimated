"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[8533],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32799:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>P,contentTitle:()=>x,default:()=>D,frontMatter:()=>N,metadata:()=>R,toc:()=>O});var a=n(87462),r=n(67294),i=n(3905),l=n(67177),o=n(24404),s=n(72400),u=n(28033),c=n(82334),d=n(10758),p=n(10919),m=n(72510),h=n(26503),f=n(12717),v=n(49638);const y={code:"function anonymous(){const{width}=this.__closure;return width.value;}"},b={code:"function anonymous(){const{measure,animatedRef,runOnJS,setText}=this.__closure;const measurement=measure(animatedRef);if(measurement!==null){runOnJS(setText)(measurement.width);}}"};function k(){const e=(0,c.m)(),t=(0,d.y)(100),[n,a]=r.useState(t.value);return(0,m.J)(function(){const e=()=>t.value;return e.__closure={width:t},e.__workletHash=8144979773625,e.__initData=y,e}(),function(){const t=function(){const t=(0,h.L)(e);null!==t&&(0,f.tC)(a)(t.width)};return t.__closure={measure:h.L,animatedRef:e,runOnJS:f.tC,setText:a},t.__workletHash=0xe91ae394fc8,t.__initData=b,t}()),r.createElement(l.Z,{style:g.container},r.createElement(v.n,{ref:e,style:{...g.box,width:t}}),r.createElement(o.Z,{style:g.label},"width: ",n),r.createElement(s.Z,{onPress:()=>{t.value=(0,p.V)(t.value+50)},title:"Click me"}))}const g=u.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20},label:{fontSize:24,marginVertical:16,color:"#b58df1"}}),w="import React from 'react';\nimport { Button, StyleSheet, View, Text } from 'react-native';\nimport Animated, {\n  measure,\n  runOnJS,\n  useAnimatedReaction,\n  useAnimatedRef,\n  useSharedValue,\n  withSpring,\n} from 'react-native-reanimated';\n\nexport default function App() {\n  const animatedRef = useAnimatedRef<Animated.View>();\n  const width = useSharedValue<number>(100);\n  const [text, setText] = React.useState(width.value);\n\n  const handlePress = () => {\n    width.value = withSpring(width.value + 50);\n  };\n\n  // highlight-start\n  useAnimatedReaction(\n    () => width.value,\n    () => {\n      const measurement = measure(animatedRef);\n\n      if (measurement !== null) {\n        runOnJS(setText)(measurement.width);\n      }\n    }\n  );\n  // highlight-end\n\n  return (\n    <View style={styles.container}>\n      <Animated.View ref={animatedRef} style={{ ...styles.box, width }} />\n      <Text style={styles.label}>width: {text}</Text>\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n  },\n  label: {\n    fontSize: 24,\n    marginVertical: 16,\n    color: '#b58df1',\n  },\n});\n",N={sidebar_position:2},x="useAnimatedReaction",R={unversionedId:"advanced/useAnimatedReaction",id:"advanced/useAnimatedReaction",title:"useAnimatedReaction",description:"useAnimatedReaction allows you to respond to changes in a shared value. It's especially useful when comparing values previously stored in the shared value with the current one.",source:"@site/docs/advanced/useAnimatedReaction.mdx",sourceDirName:"advanced",slug:"/advanced/useAnimatedReaction",permalink:"/react-native-reanimated/docs/advanced/useAnimatedReaction",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/advanced/useAnimatedReaction.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"measure",permalink:"/react-native-reanimated/docs/advanced/measure"},next:{title:"useFrameCallback",permalink:"/react-native-reanimated/docs/advanced/useFrameCallback"}},P={},O=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>prepare</code>",id:"prepare",level:4},{value:"<code>react</code>",id:"react",level:4},{value:"<code>dependencies</code> <Optional/>",id:"dependencies-",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],A=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},C=A("Optional"),T=A("InteractiveExample"),S=A("Indent"),E={toc:O},j="wrapper";function D(e){let{components:t,...n}=e;return(0,i.kt)(j,(0,a.Z)({},E,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"useanimatedreaction"},"useAnimatedReaction"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedReaction")," allows you to respond to changes in a ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value"),". It's especially useful when comparing values previously stored in the shared value with the current one."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import { useAnimatedReaction } from 'react-native-reanimated';\n\nfunction App() {\n  useAnimatedReaction(\n    () => {\n      return sv.value;\n    },\n    (currentValue, previousValue) => {\n      if (currentValue !== previousValue) {\n        // do something \u2728\n      }\n    }\n  );\n\n  // ...\n}\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"type DependencyList = ReadonlyArray<any>;\n\nfunction useAnimatedReaction<T>(\n  prepare: () => T,\n  react: (prepareResult: T, preparePreviousResult: T | null) => void,\n  dependencies?: DependencyList\n): void;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"prepare"},(0,i.kt)("inlineCode",{parentName:"h4"},"prepare")),(0,i.kt)("p",null,"A function that should return a value to which you'd like to react. The value returned from this function is used as the first parameter of the ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," argument."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  useAnimatedReaction(\n    // highlight-start\n    () => {\n      return Math.floor(sv.value);\n    },\n    // highlight-end\n    (currentValue, previousValue) => {\n      // ...\n    }\n  );\n}\n")),(0,i.kt)("h4",{id:"react"},(0,i.kt)("inlineCode",{parentName:"h4"},"react")),(0,i.kt)("p",null,"A function that reacts to changes in the value returned by the ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare")," function. The ",(0,i.kt)("inlineCode",{parentName:"p"},"react")," function has two parameters: the current value from the ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare")," function and the previous value, which is initially set to ",(0,i.kt)("inlineCode",{parentName:"p"},"null"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  useAnimatedReaction(\n    () => {\n      return Math.floor(sv.value);\n    },\n    // highlight-next-line\n    (currentValue, previousValue) => {\n      // ...\n      // highlight-next-line\n    }\n  );\n}\n")),(0,i.kt)("h4",{id:"dependencies-"},(0,i.kt)("inlineCode",{parentName:"h4"},"dependencies")," ",(0,i.kt)(C,{mdxType:"Optional"})),(0,i.kt)("p",null,"An optional array of dependencies."),(0,i.kt)("p",null,"Only relevant when using Reanimated ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/guides/web-support#web-without-the-babel-plugin"},"without the Babel plugin on the Web"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedReaction")," returns ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(T,{src:w,component:k,mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"remarks"},"Remarks"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ensure you do not mutate the same shared value in the ",(0,i.kt)("inlineCode",{parentName:"li"},"result")," function that you've used in the ",(0,i.kt)("inlineCode",{parentName:"li"},"prepare")," function, as this will lead to an infinite loop.")),(0,i.kt)(S,{mdxType:"Indent"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"function App() {\n  useAnimatedReaction(\n    () => {\n      // highlight-next-line\n      return width.value;\n    },\n    (currentValue) => {\n      // \ud83d\udea8 An infinite loop!\n      // highlight-next-line\n      width.value += currentValue;\n    }\n  );\n}\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Callbacks passed to the ",(0,i.kt)("inlineCode",{parentName:"p"},"prepare")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"result")," arguments are automatically ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#to-workletize"},"workletized")," and run on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#ui-thread"},"UI thread"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You can technically react to any stateful React value using ",(0,i.kt)("inlineCode",{parentName:"p"},"useAnimatedReaction")," but you should probably use a ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffect")," for that instead."))),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"platform-compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}D.isMDXComponent=!0},49638:(e,t,n)=>{n.d(t,{n:()=>r});var a=n(67177);const r=(0,n(99435).F)(a.Z)},72400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),r=n(28033),i=n(88548),l=n(24404),o=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,r=e.color,o=e.disabled,u=e.onPress,c=e.testID,d=e.title;return a.createElement(i.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:o,focusable:!o,onPress:u,ref:t,style:[s.button,r&&{backgroundColor:r},o&&s.buttonDisabled],testID:c},a.createElement(l.Z,{style:[s.text,o&&s.textDisabled]},d))}));o.displayName="Button";var s=r.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const u=o},88548:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),r=n(63366),i=n(67294),l=n(16528),o=n(94119),s=n(28033),u=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,s=e.delayPressIn,d=e.delayPressOut,m=e.delayLongPress,h=e.disabled,f=e.focusable,v=e.onLongPress,y=e.onPress,b=e.onPressIn,k=e.onPressOut,g=e.rejectResponderTermination,w=e.style,N=(0,r.Z)(e,c),x=(0,i.useRef)(null),R=(0,l.Z)(t,x),P=(0,i.useState)("0s"),O=P[0],A=P[1],C=(0,i.useState)(null),T=C[0],S=C[1],E=(0,i.useCallback)(((e,t)=>{S(e),A(t?t/1e3+"s":"0s")}),[S,A]),j=(0,i.useCallback)((e=>{E(null!=n?n:.2,e)}),[n,E]),D=(0,i.useCallback)((e=>{E(null,e)}),[E]),V=(0,i.useMemo)((()=>({cancelable:!g,disabled:h,delayLongPress:m,delayPressStart:s,delayPressEnd:d,onLongPress:v,onPress:y,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;j(t?0:150),null!=b&&b(e)},onPressEnd(e){D(250),null!=k&&k(e)}})),[m,s,d,h,v,y,b,k,g,j,D]),_=(0,o.Z)(x,V);return i.createElement(u.Z,(0,a.Z)({},N,_,{accessibilityDisabled:h,focusable:!h&&!1!==f,pointerEvents:h?"none":void 0,ref:R,style:[p.root,!h&&p.actionable,w,null!=T&&{opacity:T},{transitionDuration:O}]}))}var p=s.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),m=i.memo(i.forwardRef(d));m.displayName="TouchableOpacity";const h=m}}]);