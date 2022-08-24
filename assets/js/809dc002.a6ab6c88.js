"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[858],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||s;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<s;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6950:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return a},metadata:function(){return p},toc:function(){return u}});var n=r(7462),o=r(3366),s=(r(7294),r(3905)),i=["components"],a={sidebar_label:"Server",title:"SimpleRestJson server"},l=void 0,p={unversionedId:"protocols/simple-rest-json/server",id:"protocols/simple-rest-json/server",title:"SimpleRestJson server",description:"The smithy4s-http4s module provides functions that transform instances of the generated interfaces into http4s routes, provided the corresponding service definitions (in smithy) are  annotated with the simpleRestJson protocol.",source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/02-simple-rest-json/02-server.md",sourceDirName:"03-protocols/02-simple-rest-json",slug:"/protocols/simple-rest-json/server",permalink:"/smithy4s/docs/protocols/simple-rest-json/server",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/03-protocols/02-simple-rest-json/02-server.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Server",title:"SimpleRestJson server"},sidebar:"tutorialSidebar",previous:{title:"SimpleRestJson",permalink:"/smithy4s/docs/protocols/simple-rest-json/overview"},next:{title:"Client",permalink:"/smithy4s/docs/protocols/simple-rest-json/client"}},c={},u=[{value:"A note about errors",id:"a-note-about-errors",level:2},{value:"Wiring the routes",id:"wiring-the-routes",level:2}],m={toc:u};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"smithy4s-http4s")," module provides functions that transform instances of the generated interfaces into http4s routes, provided the corresponding service definitions (in smithy) are  annotated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"simpleRestJson")," protocol."),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"build.sbt")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'libraryDependencies ++= Seq(\n  // version sourced from the plugin\n  "com.disneystreaming.smithy4s"  %% "smithy4s-http4s" % smithy4sVersion.value\n)\n')),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"MyHelloWorld.scala"),", implement the service interface that is generated at build-time:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'// the package under which the scala code was generated\nimport smithy4s.hello._\n\nimport cats.effect.IO\n\nobject HelloWorldImpl extends HelloWorldService[IO] {\n\n  def hello(name: String, town: Option[String]) : IO[Greeting] = IO.pure {\n    town match {\n      case None => Greeting(s"Hello $name !")\n      case Some(t) => Greeting(s"Hello $name from $t !")\n    }\n  }\n\n}\n')),(0,s.kt)("p",null,"In ",(0,s.kt)("inlineCode",{parentName:"p"},"Routes.scala")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"import smithy4s.http4s.SimpleRestJsonBuilder\nimport org.http4s._\nimport cats.effect.IO\nimport cats.effect.Resource\n\nobject Routes {\n  // This can be easily mounted onto a server.\n  val myRoutes : Resource[IO, HttpRoutes[IO]] =\n    SimpleRestJsonBuilder.routes(HelloWorldImpl).resource\n}\n")),(0,s.kt)("h2",{id:"a-note-about-errors"},"A note about errors"),(0,s.kt)("p",null,"When encountering data types annotated with the ",(0,s.kt)("inlineCode",{parentName:"p"},"@error")," trait in smithy, smithy4s will ensure that the generated types extend ",(0,s.kt)("inlineCode",{parentName:"p"},"Throwable"),". The interpreters are aware of it, and try to recover any error raised in your effect-types that your smithy specs know about, in order to render it correctly in Json and apply the specified status code (see the ",(0,s.kt)("inlineCode",{parentName:"p"},"@httpError")," trait for this)."),(0,s.kt)("p",null,"As a convenience, Smithy4s provides ",(0,s.kt)("inlineCode",{parentName:"p"},"mapErrors")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"flatMapErrors")," methods, that allow to intercept exceptions that were not specified in the spec, and transform them into exceptions that were."),(0,s.kt)("p",null,"In particular, the smithy4s interpreters raise specific errors when they fail to decode http requests. The ",(0,s.kt)("inlineCode",{parentName:"p"},"mapErrors")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"flatMapErrors")," methods can be used to ensure that a specified error is returned by your service:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},"myRoutes.mapErrors{\n  case e : PayloadError => MyClientError(...)\n}.resource\n")),(0,s.kt)("h2",{id:"wiring-the-routes"},"Wiring the routes"),(0,s.kt)("p",null,"As a reminder, to wire those routes into a server, you need something like:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect._\nimport org.http4s.ember.server._\nimport org.http4s.implicits._\nimport com.comcast.ip4s._\n\nobject Main extends IOApp {\n\n  def run(args: List[String]): IO[ExitCode] =\n    Routes.myRoutes.flatMap { routes =>\n      EmberServerBuilder.default[IO]\n        .withPort(port"9000")\n        .withHost(host"localhost")\n        .withHttpApp(routes.orNotFound)\n        .build\n    }.use(_ => IO.never)\n     .as(ExitCode.Success)\n}\n')))}d.isMDXComponent=!0}}]);