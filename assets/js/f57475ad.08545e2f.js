"use strict";(self.webpackChunkdocs_reanimated=self.webpackChunkdocs_reanimated||[]).push([[823],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(n),p=i,h=m["".concat(l,".").concat(p)]||m[p]||c[p]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},46668:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>x,frontMatter:()=>f,metadata:()=>v,toc:()=>k});var a=n(87462),i=n(67294),o=n(3905),r=n(67177),s=n(72400),l=n(28033),u=n(10758),d=n(10919),m=n(49638);function c(){const e=(0,u.y)(100);return i.createElement(r.Z,{style:p.container},i.createElement(m.n,{style:{...p.box,width:e}}),i.createElement(s.Z,{onPress:()=>{e.value=(0,d.V)(e.value+50)},title:"Click me"}))}const p=l.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64}}),h="import React from 'react';\nimport { Button, StyleSheet, View } from 'react-native';\nimport Animated, { useSharedValue, withSpring } from 'react-native-reanimated';\n\nexport default function App() {\n  const width = useSharedValue<number>(100);\n\n  const handlePress = () => {\n    width.value = withSpring(width.value + 50);\n  };\n\n  return (\n    <View style={styles.container}>\n      <Animated.View style={{ ...styles.box, width }} />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n  },\n});\n",f={sidebar_position:2},g="Your First Animation",v={unversionedId:"fundamentals/your-first-animation",id:"fundamentals/your-first-animation",title:"Your First Animation",description:"In this section, we'll guide you through the basic concepts of Reanimated. If you're new to Reanimated, you're in the right hands! We're going to start by building a simple animation which will help you develop a basic understanding of the library. Then, in the following sections, we're going to build on top of this knowledge and further expand your skills. Let's go!",source:"@site/docs/fundamentals/your-first-animation.mdx",sourceDirName:"fundamentals",slug:"/fundamentals/your-first-animation",permalink:"/react-native-reanimated/docs/fundamentals/your-first-animation",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/fundamentals/your-first-animation.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/react-native-reanimated/docs/fundamentals/getting-started"},next:{title:"Animating styles and props",permalink:"/react-native-reanimated/docs/fundamentals/animating-styles-and-props"}},y={},k=[{value:"Using an Animated component",id:"using-an-animated-component",level:2},{value:"Defining a shared value",id:"defining-a-shared-value",level:2},{value:"Using a shared value",id:"using-a-shared-value",level:2},{value:"Using an animation function",id:"using-an-animation-function",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],b=(w="InteractiveExample",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)});var w;const N={toc:k},C="wrapper";function x(e){let{components:t,...n}=e;return(0,o.kt)(C,(0,a.Z)({},N,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"your-first-animation"},"Your First Animation"),(0,o.kt)("p",null,"In this section, we'll guide you through the basic concepts of Reanimated. If you're new to Reanimated, you're in the right hands! We're going to start by building a simple animation which will help you develop a basic understanding of the library. Then, in the following sections, we're going to build on top of this knowledge and further expand your skills. Let's go!"),(0,o.kt)("h2",{id:"using-an-animated-component"},"Using an Animated component"),(0,o.kt)("p",null,"Let's start by having something that we could see on the screen. First, to create an animatable component you need to import an ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated")," object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import Animated from 'react-native-reanimated';\n")),(0,o.kt)("p",null,"This ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated")," object wraps React Native built-ins such as ",(0,o.kt)("inlineCode",{parentName:"p"},"View"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"ScrollView")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"FlatList"),"."),(0,o.kt)("p",null,"You use these components as any other JSX components:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{5}","{5}":!0},"import Animated from 'react-native-reanimated';\n\nexport default function App() {\n  return (\n    <Animated.View\n      style={{\n        width: 100,\n        height: 100,\n        backgroundColor: 'violet',\n      }}\n    />\n  );\n}\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"You can create your own custom Animated components with ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/createAnimatedComponent"},(0,o.kt)("inlineCode",{parentName:"a"},"createAnimatedComponent")),".")),(0,o.kt)("h2",{id:"defining-a-shared-value"},"Defining a shared value"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/glossary#shared-value"},"shared value")," is a driving factor of all your animations. You can think of it as a React state which is automagically kept in sync between the \u201cJavaScript\u201d and the \u201cnative\u201d side of your app (hence the name). You create shared values using a ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import { useSharedValue } from 'react-native-reanimated';\n")),(0,o.kt)("p",null,"As with any other ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-rules.html"},"React hook"),", you need to define it in your component's body. In a shared value, you can store any JS value like ",(0,o.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"boolean")," but also data structures such as ",(0,o.kt)("inlineCode",{parentName:"p"},"array")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,o.kt)("p",null,"For now, let's use ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," as the default value of the ",(0,o.kt)("inlineCode",{parentName:"p"},"useSharedValue")," hook and pass the returned value as an inline style of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated.View"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{4,9}","{4,9}":!0},"import Animated, { useSharedValue } from 'react-native-reanimated';\n\nexport default function App() {\n  const width = useSharedValue(100);\n\n  return (\n    <Animated.View\n      style={{\n        width,\n        height: 100,\n        backgroundColor: 'violet',\n      }}\n    />\n  );\n}\n")),(0,o.kt)("h2",{id:"using-a-shared-value"},"Using a shared value"),(0,o.kt)("p",null,"Let's create a very simple animation that will animate a ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," of an element. We'll make it expand by ",(0,o.kt)("inlineCode",{parentName:"p"},"50px")," on each button press. We can do this by modifying a shared value connected to the ",(0,o.kt)("inlineCode",{parentName:"p"},"width")," property of an ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated.View")," component. I know it might sound complicated, but it's actually quite simple."),(0,o.kt)("p",null,"Values stored in shared values are accessed and modified by their ",(0,o.kt)("inlineCode",{parentName:"p"},".value")," property."),(0,o.kt)("p",null,"There's no setter or anything - you simply mutate the ",(0,o.kt)("inlineCode",{parentName:"p"},".value")," property like there's no tomorrow."),(0,o.kt)("p",null,"Let's define a ",(0,o.kt)("inlineCode",{parentName:"p"},"handlePress")," function inside of which we'll modify the shared value:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{8,20}","{8,20}":!0},"import { Button, View } from 'react-native';\nimport Animated, { useSharedValue } from 'react-native-reanimated';\n\nexport default function App() {\n  const width = useSharedValue(100);\n\n  const handlePress = () => {\n    width.value = width.value + 50;\n  };\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center' }}>\n      <Animated.View\n        style={{\n          width,\n          height: 100,\n          backgroundColor: 'violet',\n        }}\n      />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"Please hold on a second before you shorten ",(0,o.kt)("inlineCode",{parentName:"p"},"width.value = width.value + 50")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"width.value += 50"),". We're preparing this code for the final step which will finally bring our animation to life!"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"It's a common mistake to modify a shared value directly like this: ",(0,o.kt)("del",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"del"},"sv = sv + 100;")),". Always remember to access the shared value by using the ",(0,o.kt)("inlineCode",{parentName:"p"},".value")," property instead. Here, the correct usage would be ",(0,o.kt)("inlineCode",{parentName:"p"},"sv.value = sv.value + 100;"),".")),(0,o.kt)("h2",{id:"using-an-animation-function"},"Using an animation function"),(0,o.kt)("p",null,"Finally, import ",(0,o.kt)("inlineCode",{parentName:"p"},"withSpring")," function and wrap around ",(0,o.kt)("inlineCode",{parentName:"p"},"width.value + 50")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"handlePress")," function so that the value which ",(0,o.kt)("inlineCode",{parentName:"p"},"withSpring")," returns modifies the shared value. This will create a bouncy spring animation that transitions the width of the element from its current value (here ",(0,o.kt)("inlineCode",{parentName:"p"},"width.value"),") to the new one (here ",(0,o.kt)("inlineCode",{parentName:"p"},"width.value + 50"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"{2,8}","{2,8}":!0},"import { Button, View } from 'react-native';\nimport Animated, { useSharedValue, withSpring } from 'react-native-reanimated';\n\nexport default function App() {\n  const width = useSharedValue(100);\n\n  const handlePress = () => {\n    width.value = withSpring(width.value + 50);\n  };\n\n  return (\n    <View style={{ flex: 1, alignItems: 'center' }}>\n      <Animated.View\n        style={{\n          width,\n          height: 100,\n          backgroundColor: 'violet',\n        }}\n      />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n")),(0,o.kt)("p",null,"And voil\xe0, we've made our first animation using Reanimated! You can see how it works in its full glory in a preview below:"),(0,o.kt)(b,{src:h,component:c,mdxType:"InteractiveExample"}),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this section, we gained a firm grasp on the Reanimated fundamentals. We learned about ",(0,o.kt)("inlineCode",{parentName:"p"},"Animated")," components, shared values and how to use them to create a simple animation. To sum up:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Animated")," components are used to define animatable elements."),(0,o.kt)("li",{parentName:"ul"},"Shared values are a driving factor of all animations and we define them using a ",(0,o.kt)("inlineCode",{parentName:"li"},"useSharedValue")," hook."),(0,o.kt)("li",{parentName:"ul"},"Shared values are always accessed and modified by their ",(0,o.kt)("inlineCode",{parentName:"li"},".value")," property (eg. ",(0,o.kt)("inlineCode",{parentName:"li"},"sv.value = 100;"),")."),(0,o.kt)("li",{parentName:"ul"},"To create smooth animations modify shared values using animation functions like ",(0,o.kt)("inlineCode",{parentName:"li"},"withTiming"))),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"In ",(0,o.kt)("a",{parentName:"p",href:"/docs/fundamentals/animating-styles-and-props"},"the next section"),", we will learn more about how to animate styles and props using ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"useAnimatedProps")," hooks."))}x.isMDXComponent=!0},10919:(e,t,n)=>{n.d(t,{V:()=>o});var a=n(76933);function i(e,t,n){if(t.skipAnimation)return 0;const{stiffness:a,dampingRatio:i,restSpeedThreshold:o,duration:r}=t;return function(e){let{min:t,max:n,func:a,maxIterations:i=20}=e,o=i,r=(n+t)/2;for(;Math.abs(a(r))>5e-5&&o>0;)o-=1,a(r)<0?t=r:n=r,r=(t+n)/2;return r}({min:0,max:100,func:t=>{const s=(t*n*n+a*e*e)/(Math.exp(1-.5*i)*a);return-2*t/(2*i*Math.sqrt(a*t))*1e3*Math.log(.01*o/s)-r}})}const o=(e,t,n)=>(0,a.oF)(e,(()=>{const o={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0,clamp:void 0},...t,useDuration:!!(null!=t&&t.duration||null!=t&&t.dampingRatio),skipAnimation:!1};return o.skipAnimation=!function(e){var t,n;let a="";return["stiffness","damping","dampingRatio","restDisplacementThreshold","restSpeedThreshold","mass"].forEach((t=>{const n=e[t];n<=0&&(a+=`, ${t} must be grater than zero but got ${n}`)})),e.duration<0&&(a+=`, duration can't be negative, got ${e.duration}`),null!==(t=e.clamp)&&void 0!==t&&t.min&&null!==(n=e.clamp)&&void 0!==n&&n.max&&e.clamp.min>e.clamp.max&&(a+=`, clamp.min should be lower than clamp.max, got clamp: {min: ${e.clamp.min}, max: ${e.clamp.max}} `),""!==a&&console.warn("[Reanimated] Invalid spring config"+a),""===a}(o),0===o.duration&&(o.skipAnimation=!0),{onFrame:function(e,t){const{toValue:n,startTimestamp:a,current:i}=e,r=t-a;if(o.useDuration&&r>=o.duration)return e.current=n,e.lastTimestamp=0,!0;if(o.skipAnimation)return e.current=n,e.lastTimestamp=0,!0;const{lastTimestamp:s,velocity:l}=e,u=Math.min(t-s,64);e.lastTimestamp=t;const d=u/1e3,m=-l,c=n-i,{zeta:p,omega0:h,omega1:f}=e,{position:g,velocity:v}=p<1?function(e,t){const{toValue:n,current:a,velocity:i}=e,{zeta:o,t:r,omega0:s,omega1:l}=t,u=-i,d=n-a,m=Math.sin(l*r),c=Math.cos(l*r),p=Math.exp(-o*s*r),h=p*(m*((u+o*s*d)/l)+d*c);return{position:n-h,velocity:o*s*h-p*(c*(u+o*s*d)-l*d*m)}}(e,{zeta:p,v0:m,x0:c,omega0:h,omega1:f,t:d}):function(e,t){const{toValue:n}=e,{v0:a,x0:i,omega0:o,t:r}=t,s=Math.exp(-o*r);return{position:n-s*(i+(a+o*i)*r),velocity:s*(a*(r*o-1)+r*i*o*o)}}(e,{v0:m,x0:c,omega0:h,t:d});e.current=g,e.velocity=v;const{isOvershooting:y,isVelocity:k,isDisplacement:b}=function(e,t){const{toValue:n,velocity:a,startValue:i,current:o}=e;return{isOvershooting:!!t.overshootClamping&&(o>n&&i<n||o<n&&i>n),isVelocity:Math.abs(a)<t.restSpeedThreshold,isDisplacement:Math.abs(n-o)<t.restDisplacementThreshold}}(e,o),w=y||k&&b;return!(o.useDuration||!w)&&(e.velocity=0,e.current=n,e.lastTimestamp=0,!0)},onStart:function(e,t,n,a){e.current=t,e.startValue=t;let r=o.mass;const s=function(e,t){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===t.toValue&&(null==e?void 0:e.duration)===t.duration&&(null==e?void 0:e.dampingRatio)===t.dampingRatio}(a,e),l=o.duration,u=s?null==a?void 0:a.startValue:Number(e.toValue)-t;if(e.velocity=a?(s?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+o.velocity)||0:o.velocity||0,s)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(o.useDuration){const t=s?l-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):l;o.duration=t,r=i(u,o,e.velocity)}const{zeta:t,omega0:n,omega1:d}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if(t.skipAnimation)return{zeta:0,omega0:0,omega1:0};if(t.useDuration){const{stiffness:n,dampingRatio:a}=t,i=Math.sqrt(n/e);return{zeta:a,omega0:i,omega1:i*Math.sqrt(1-a**2)}}{const{damping:e,mass:n,stiffness:a}=t,i=e/(2*Math.sqrt(a*n)),o=Math.sqrt(a/n);return{zeta:i,omega0:o,omega1:o*Math.sqrt(1-i**2)}}}(r,o);e.zeta=t,e.omega0=n,e.omega1=d,void 0!==o.clamp&&(e.zeta=function(e,t){const{zeta:n,toValue:a,startValue:i}=e,o=Number(a);if(o===i)return n;const[r,s]=o-i>0?[t.min,t.max]:[t.max,t.min],l=void 0!==s?Math.abs((s-o)/(o-i)):void 0,u=void 0!==r?Math.abs((r-o)/(o-i)):void 0,d=[void 0!==l?Math.abs(Math.log(l)/Math.PI):void 0,void 0!==u?Math.abs(Math.log(u)/(2*Math.PI)):void 0].filter((e=>void 0!==e));return Math.max(...d,n)}(e,o.clamp))}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||n,e.startTimestamp=s&&(null==a?void 0:a.startTimestamp)||n},toValue:e,velocity:o.velocity||0,current:e,startValue:0,callback:n,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.uh)(o.reduceMotion)}}))},49638:(e,t,n)=>{n.d(t,{n:()=>i});var a=n(67177);const i=(0,n(99435).F)(a.Z)},72400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(67294),i=n(28033),o=n(88548),r=n(24404),s=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,i=e.color,s=e.disabled,u=e.onPress,d=e.testID,m=e.title;return a.createElement(o.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:u,ref:t,style:[l.button,i&&{backgroundColor:i},s&&l.buttonDisabled],testID:d},a.createElement(r.Z,{style:[l.text,s&&l.textDisabled]},m))}));s.displayName="Button";var l=i.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const u=s},88548:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(87462),i=n(63366),o=n(67294),r=n(16528),s=n(94119),l=n(28033),u=n(67177),d=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function m(e,t){var n=e.activeOpacity,l=e.delayPressIn,m=e.delayPressOut,p=e.delayLongPress,h=e.disabled,f=e.focusable,g=e.onLongPress,v=e.onPress,y=e.onPressIn,k=e.onPressOut,b=e.rejectResponderTermination,w=e.style,N=(0,i.Z)(e,d),C=(0,o.useRef)(null),x=(0,r.Z)(t,C),P=(0,o.useState)("0s"),V=P[0],A=P[1],S=(0,o.useState)(null),T=S[0],O=S[1],M=(0,o.useCallback)(((e,t)=>{O(e),A(t?t/1e3+"s":"0s")}),[O,A]),D=(0,o.useCallback)((e=>{M(null!=n?n:.2,e)}),[n,M]),R=(0,o.useCallback)((e=>{M(null,e)}),[M]),j=(0,o.useMemo)((()=>({cancelable:!b,disabled:h,delayLongPress:p,delayPressStart:l,delayPressEnd:m,onLongPress:g,onPress:v,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;D(t?0:150),null!=y&&y(e)},onPressEnd(e){R(250),null!=k&&k(e)}})),[p,l,m,h,g,v,y,k,b,D,R]),I=(0,s.Z)(C,j);return o.createElement(u.Z,(0,a.Z)({},N,I,{accessibilityDisabled:h,focusable:!h&&!1!==f,pointerEvents:h?"none":void 0,ref:x,style:[c.root,!h&&c.actionable,w,null!=T&&{opacity:T},{transitionDuration:V}]}))}var c=l.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=o.memo(o.forwardRef(m));p.displayName="TouchableOpacity";const h=p}}]);