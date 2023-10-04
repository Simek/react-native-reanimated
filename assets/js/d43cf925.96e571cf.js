"use strict";(self.webpackChunkreact_native_reanimated_docs=self.webpackChunkreact_native_reanimated_docs||[]).push([[9244],{6507:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>N,frontMatter:()=>h,metadata:()=>b,toc:()=>C});var a=n(83117),o=n(67294),i=n(3905),r=n(67177),s=n(72400),l=n(28033),m=n(17613),c=n(10758),d=n(10919);const u=o.forwardRef(((e,t)=>o.createElement(r.Z,(0,a.Z)({ref:t},e)))),p=m.F(u);function v(){const e=(0,c.y)(100);return o.createElement(r.Z,{style:f.container},o.createElement(p,{style:{...f.box,width:e}}),o.createElement(s.Z,{onPress:()=>{e.value=(0,d.V)(e.value+50)},title:"Click me"}))}const f=l.Z.create({container:{flex:1,alignItems:"center"},box:{height:100,backgroundColor:"#b58df1",borderRadius:20,marginVertical:64}}),g="import React from 'react';\nimport { StyleSheet, View, Button } from 'react-native';\nimport Animated, { useSharedValue, withSpring } from 'react-native-reanimated';\n\nconst MyView = React.forwardRef((props, ref) => {\n  // some additional logic\n  return <View ref={ref} {...props} />;\n});\n\n// highlight-next-line\nconst MyAnimatedView = Animated.createAnimatedComponent(MyView);\n\nexport default function App() {\n  const width = useSharedValue(100);\n\n  const handlePress = () => {\n    width.value = withSpring(width.value + 50);\n  };\n\n  return (\n    <View style={styles.container}>\n      <MyAnimatedView style={{ ...styles.box, width }} />\n      <Button onPress={handlePress} title=\"Click me\" />\n    </View>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n  },\n  box: {\n    height: 100,\n    backgroundColor: '#b58df1',\n    borderRadius: 20,\n    marginVertical: 64,\n  },\n});\n",h={sidebar_position:6},y="createAnimatedComponent",b={unversionedId:"core/createAnimatedComponent",id:"core/createAnimatedComponent",title:"createAnimatedComponent",description:"createAnimatedComponent lets you create an Animated version of any React Native component. Wrapping a component with createAnimatedComponent allows Reanimated to animate any prop or style associated with that component.",source:"@site/docs/core/createAnimatedComponent.mdx",sourceDirName:"core",slug:"/core/createAnimatedComponent",permalink:"/react-native-reanimated/docs/core/createAnimatedComponent",draft:!1,editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/main/docs/docs/core/createAnimatedComponent.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"useDerivedValue",permalink:"/react-native-reanimated/docs/core/useDerivedValue"},next:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/core/cancelAnimation"}},k={},C=[{value:"Reference",id:"reference",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>component</code>",id:"component",level:4},{value:"Returns",id:"returns",level:3},{value:"Example",id:"example",level:2},{value:"Platform compatibility",id:"platform-compatibility",level:2}],A=(w="InteractiveExample",function(e){return console.warn("Component "+w+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)});var w;const x={toc:C},P="wrapper";function N(e){let{components:t,...n}=e;return(0,i.kt)(P,(0,a.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"createanimatedcomponent"},"createAnimatedComponent"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createAnimatedComponent")," lets you create an Animated version of any React Native component. Wrapping a component with ",(0,i.kt)("inlineCode",{parentName:"p"},"createAnimatedComponent")," allows Reanimated to animate any prop or style associated with that component."),(0,i.kt)("p",null,"Reanimated comes with five built-in Animated components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Animated.FlatList")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Animated.Image")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Animated.View")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Animated.ScrollView")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Animated.Text"))),(0,i.kt)("p",null,"Rest of the components you might want to animate in React Native have to be wrapped with a ",(0,i.kt)("inlineCode",{parentName:"p"},"createAnimatedComponent")," function."),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"import Animated from 'react-native-reanimated';\nimport { TextInput } from 'react-native';\n\nconst AnimatedTextInput = Animated.createAnimatedComponent(TextInput);\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Type definitions"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"function createAnimatedComponent<P extends object>(\n  component: ComponentClass<P>\n): ComponentClass<AnimateProps<P>>;\n\nfunction createAnimatedComponent<P extends object>(\n  component: FunctionComponent<P>\n): FunctionComponent<AnimateProps<P>>;\n"))),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"component"},(0,i.kt)("inlineCode",{parentName:"h4"},"component")),(0,i.kt)("p",null,"The component you want to make animatable. Function components have to be wrapped with ",(0,i.kt)("inlineCode",{parentName:"p"},"React.forwardRef()"),"."),(0,i.kt)("h3",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"createAnimatedComponent")," returns a component that Reanimated is capable of animating."),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(A,{src:g,component:(0,i.kt)(v,{mdxType:"CreateAnimatedComponent"}),showCode:!0,mdxType:"InteractiveExample"}),(0,i.kt)("h2",{id:"platform-compatibility"},"Platform compatibility"),(0,i.kt)("div",{className:"compatibility"},(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Android"),(0,i.kt)("th",{parentName:"tr",align:null},"iOS"),(0,i.kt)("th",{parentName:"tr",align:null},"Web"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,i.kt)("td",{parentName:"tr",align:null},"\u2705"))))))}N.isMDXComponent=!0},10919:(e,t,n)=>{n.d(t,{V:()=>i});var a=n(76933);function o(e,t,n){if(t.configIsInvalid)return 0;const{stiffness:a,dampingRatio:o,restSpeedThreshold:i,duration:r}=t;return function(e){let{min:t,max:n,func:a,maxIterations:o=20}=e,i=o,r=(n+t)/2;for(;Math.abs(a(r))>5e-5&&i>0;)i-=1,a(r)<0?t=r:n=r,r=(t+n)/2;return r}({min:0,max:100,func:t=>{const s=(t*n*n+a*e*e)/(Math.exp(1-.5*o)*a);return-2*t/(2*o*Math.sqrt(a*t))*1e3*Math.log(.01*i/s)-r}})}const i=(e,t,n)=>(0,a.oF)(e,(()=>{const i={...{damping:10,mass:1,stiffness:100,overshootClamping:!1,restDisplacementThreshold:.01,restSpeedThreshold:2,velocity:0,duration:2e3,dampingRatio:.5,reduceMotion:void 0},...t,useDuration:!!(null!=t&&t.duration||null!=t&&t.dampingRatio),configIsInvalid:!1};return([i.stiffness,i.damping,i.duration,i.dampingRatio,i.restDisplacementThreshold,i.restSpeedThreshold].some((e=>e<=0))||0===i.mass)&&(i.configIsInvalid=!0,console.warn("You have provided invalid spring animation configuration! \n Value of stiffness, damping, duration and damping ratio must be greater than zero, and mass can't equal zero.")),{onFrame:function(e,t){const{toValue:n,startTimestamp:a,current:o}=e,r=t-a;if(i.useDuration&&r>=i.duration)return e.current=n,e.lastTimestamp=0,!0;if(i.configIsInvalid)return!i.useDuration&&(e.current=n,e.lastTimestamp=0,!0);const{lastTimestamp:s,velocity:l}=e,m=Math.min(t-s,64);e.lastTimestamp=t;const c=m/1e3,d=-l,u=n-o,{zeta:p,omega0:v,omega1:f}=e,{position:g,velocity:h}=p<1?function(e,t){const{toValue:n,current:a,velocity:o}=e,{zeta:i,t:r,omega0:s,omega1:l}=t,m=-o,c=n-a,d=Math.sin(l*r),u=Math.cos(l*r),p=Math.exp(-i*s*r),v=p*(d*((m+i*s*c)/l)+c*u);return{position:n-v,velocity:i*s*v-p*(u*(m+i*s*c)-l*c*d)}}(e,{zeta:p,v0:d,x0:u,omega0:v,omega1:f,t:c}):function(e,t){const{toValue:n}=e,{v0:a,x0:o,omega0:i,t:r}=t,s=Math.exp(-i*r);return{position:n-s*(o+(a+i*o)*r),velocity:s*(a*(r*i-1)+r*o*i*i)}}(e,{v0:d,x0:u,omega0:v,t:c});e.current=g,e.velocity=h;const{isOvershooting:y,isVelocity:b,isDisplacement:k}=function(e,t){const{toValue:n,velocity:a,startValue:o,current:i}=e;return{isOvershooting:!!t.overshootClamping&&(i>n&&o<n||i<n&&o>n),isVelocity:Math.abs(a)<t.restSpeedThreshold,isDisplacement:Math.abs(n-i)<t.restDisplacementThreshold}}(e,i),C=y||b&&k;return!(i.useDuration||!C)&&(e.velocity=0,e.current=n,e.lastTimestamp=0,!0)},onStart:function(e,t,n,a){e.current=t,e.startValue=t;let r=i.mass;const s=function(e,t){return(null==e?void 0:e.lastTimestamp)&&(null==e?void 0:e.startTimestamp)&&(null==e?void 0:e.toValue)===t.toValue&&(null==e?void 0:e.duration)===t.duration&&(null==e?void 0:e.dampingRatio)===t.dampingRatio}(a,e),l=i.duration,m=s?null==a?void 0:a.startValue:Number(e.toValue)-t;if(e.velocity=a?(s?null==a?void 0:a.velocity:(null==a?void 0:a.velocity)+i.velocity)||0:i.velocity||0,s)e.zeta=(null==a?void 0:a.zeta)||0,e.omega0=(null==a?void 0:a.omega0)||0,e.omega1=(null==a?void 0:a.omega1)||0;else{if(i.useDuration){const t=s?l-(((null==a?void 0:a.lastTimestamp)||0)-((null==a?void 0:a.startTimestamp)||0)):l;i.duration=t,r=o(m,i,e.velocity)}const{zeta:t,omega0:n,omega1:c}=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1?arguments[1]:void 0;if(t.configIsInvalid)return{zeta:0,omega0:0,omega1:0};if(t.useDuration){const{stiffness:n,dampingRatio:a}=t,o=Math.sqrt(n/e);return{zeta:a,omega0:o,omega1:o*Math.sqrt(1-a**2)}}{const{damping:e,mass:n,stiffness:a}=t,o=e/(2*Math.sqrt(a*n)),i=Math.sqrt(a/n);return{zeta:o,omega0:i,omega1:i*Math.sqrt(1-o**2)}}}(r,i);e.zeta=t,e.omega0=n,e.omega1=c}e.lastTimestamp=(null==a?void 0:a.lastTimestamp)||n,e.startTimestamp=s&&(null==a?void 0:a.startTimestamp)||n},toValue:e,velocity:i.velocity||0,current:e,startValue:0,callback:n,lastTimestamp:0,startTimestamp:0,zeta:0,omega0:0,omega1:0,reduceMotion:(0,a.uh)(i.reduceMotion)}}))},72400:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(67294),o=n(28033),i=n(88548),r=n(24404),s=a.forwardRef(((e,t)=>{var n=e.accessibilityLabel,o=e.color,s=e.disabled,m=e.onPress,c=e.testID,d=e.title;return a.createElement(i.Z,{accessibilityLabel:n,accessibilityRole:"button",disabled:s,focusable:!s,onPress:m,ref:t,style:[l.button,o&&{backgroundColor:o},s&&l.buttonDisabled],testID:c},a.createElement(r.Z,{style:[l.text,s&&l.textDisabled]},d))}));s.displayName="Button";var l=o.Z.create({button:{backgroundColor:"#2196F3",borderRadius:2},text:{color:"#fff",fontWeight:"500",padding:8,textAlign:"center",textTransform:"uppercase"},buttonDisabled:{backgroundColor:"#dfdfdf"},textDisabled:{color:"#a1a1a1"}});const m=s},88548:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(83117),o=n(80102),i=n(67294),r=n(16528),s=n(94119),l=n(28033),m=n(67177),c=["activeOpacity","delayPressIn","delayPressOut","delayLongPress","disabled","focusable","onLongPress","onPress","onPressIn","onPressOut","rejectResponderTermination","style"];function d(e,t){var n=e.activeOpacity,l=e.delayPressIn,d=e.delayPressOut,p=e.delayLongPress,v=e.disabled,f=e.focusable,g=e.onLongPress,h=e.onPress,y=e.onPressIn,b=e.onPressOut,k=e.rejectResponderTermination,C=e.style,A=(0,o.Z)(e,c),w=(0,i.useRef)(null),x=(0,r.Z)(t,w),P=(0,i.useState)("0s"),N=P[0],T=P[1],R=(0,i.useState)(null),V=R[0],M=R[1],D=(0,i.useCallback)(((e,t)=>{M(e),T(t?t/1e3+"s":"0s")}),[M,T]),I=(0,i.useCallback)((e=>{D(null!=n?n:.2,e)}),[n,D]),S=(0,i.useCallback)((e=>{D(null,e)}),[D]),Z=(0,i.useMemo)((()=>({cancelable:!k,disabled:v,delayLongPress:p,delayPressStart:l,delayPressEnd:d,onLongPress:g,onPress:h,onPressStart(e){var t=null!=e.dispatchConfig?"onResponderGrant"===e.dispatchConfig.registrationName:"keydown"===e.type;I(t?0:150),null!=y&&y(e)},onPressEnd(e){S(250),null!=b&&b(e)}})),[p,l,d,v,g,h,y,b,k,I,S]),E=(0,s.Z)(w,Z);return i.createElement(m.Z,(0,a.Z)({},A,E,{accessibilityDisabled:v,focusable:!v&&!1!==f,pointerEvents:v?"none":void 0,ref:x,style:[u.root,!v&&u.actionable,C,null!=V&&{opacity:V},{transitionDuration:N}]}))}var u=l.Z.create({root:{transitionProperty:"opacity",transitionDuration:"0.15s",userSelect:"none"},actionable:{cursor:"pointer",touchAction:"manipulation"}}),p=i.memo(i.forwardRef(d));p.displayName="TouchableOpacity";const v=p}}]);