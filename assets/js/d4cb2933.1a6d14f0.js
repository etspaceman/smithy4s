"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[620],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7981:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={sidebar_label:"Packed inputs",title:"Packed inputs"},s=void 0,p={unversionedId:"codegen/customisation/packed-inputs",id:"codegen/customisation/packed-inputs",title:"Packed inputs",description:"By default, Smithy4s generates methods the parameters of which map to the fields of the input structure of the corresponding operation.",source:"@site/../docs/target/jvm-2.13/mdoc/04-codegen/01-customisation/01-packed-inputs.md",sourceDirName:"04-codegen/01-customisation",slug:"/codegen/customisation/packed-inputs",permalink:"/smithy4s/docs/codegen/customisation/packed-inputs",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/04-codegen/01-customisation/01-packed-inputs.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Packed inputs",title:"Packed inputs"},sidebar:"tutorialSidebar",previous:{title:"Alloy",permalink:"/smithy4s/docs/protocols/alloy"},next:{title:"ADTs",permalink:"/smithy4s/docs/codegen/customisation/adts"}},u={},l=[],d={toc:l};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"By default, Smithy4s generates methods the parameters of which map to the fields of the input structure of the corresponding operation."),(0,a.kt)("p",null,"For instance :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'service PackedInputsService {\n  version: "1.0.0"\n  operations: [PackedInputOperation]\n}\n\noperation PackedInputOperation {\n  input: PackedInput\n}\n\nstructure PackedInput {\n    @required\n    a: String\n    @required\n    b: String\n}\n')),(0,a.kt)("p",null,"leads to something conceptually equivalent to :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait PackedInputServiceGen[F[_]] {\n\n  def packedInputOperation(a: String, b: String) : F[Unit]\n\n}\n")),(0,a.kt)("p",null,"It is however possible to annotate the service (or operation) definition with the ",(0,a.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#packedInputs")," trait, in order for the rendered method to contain a single parameter, typed with actual input case class of the operation."),(0,a.kt)("p",null,"For instance :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},'use smithy4s.meta#packedInputs\n\n@packedInputs\nservice PackedInputsService {\n  version: "1.0.0"\n  operations: [PackedInputOperation]\n}\n')),(0,a.kt)("p",null,"will produce the following Scala code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-scala"},"trait PackedInputServiceGen[F[_]] {\n\n  def packedInputOperation(input: PackedInput) : F[Unit]\n\n}\n")))}m.isMDXComponent=!0}}]);