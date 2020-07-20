(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{155:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(9),r=(t(0),t(170)),c={title:"Generated Code Reference",sidebar_label:"Generated code"},o={id:"generated-code",isDocsHomePage:!1,title:"Generated Code Reference",description:"Packages and code location",source:"@site/../zio-grpc-docs/target/mdoc/generated-code.md",permalink:"/zio-grpc/docs/generated-code",editUrl:"https://github.com/scalapb/zio-grpc/edit/master/foo/docs/../zio-grpc-docs/target/mdoc/generated-code.md",sidebar_label:"Generated code",sidebar:"someSidebar",previous:{title:"Installing ZIO gRPC",permalink:"/zio-grpc/docs/installation"},next:{title:"Context and Dependencies",permalink:"/zio-grpc/docs/context"}},l=[{value:"Packages and code location",id:"packages-and-code-location",children:[]},{value:"Service trait",id:"service-trait",children:[{value:"Running the server",id:"running-the-server",children:[]}]},{value:"Client trait",id:"client-trait",children:[{value:"Using the client as a layer",id:"using-the-client-as-a-layer",children:[]},{value:"Using a Managed Client",id:"using-a-managed-client",children:[]}]}],s={rightToc:l};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"packages-and-code-location"},"Packages and code location"),Object(r.b)("p",null,"For each proto file that contains services definition, ZIO gRPC generates a Scala\nobject that will contain service definitions for all services in that file. The\nobject name would be the proto file name prefixed with ",Object(r.b)("inlineCode",{parentName:"p"},"Zio"),". It would reside in the same Scala package that ScalaPB will use for definitions in that file."),Object(r.b)("p",null,"You can read more on how ScalaPB determines the Scala package name and how can this be customized in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://scalapb.github.io/generated-code.html#default-package-structure"}),"ScalaPB's documentation"),"."),Object(r.b)("h2",{id:"service-trait"},"Service trait"),Object(r.b)("p",null,"Inside the object, for each service ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceName")," that is defined in a ",Object(r.b)("inlineCode",{parentName:"p"},".proto")," file, the following structure is generated:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"trait ZServiceName[R, Context] {\n  // methods for each RPC\n  def sayHello(request: HelloRequest): ZIO[R with Context, Status, HelloReply]\n}\ntype ServiceName = ZServiceName[Any, Any]\ntype RServiceName[R] = ZServiceName[R, Any]\ntype RCServiceName[R] = ZServiceName[R, zio.Has[scalapb.zio_grpc.RequestContext]]\n")),Object(r.b)("p",null,"The trait ",Object(r.b)("inlineCode",{parentName:"p"},"ZServiceName")," is to be extended when implementing a server for this service. The trait takes two type parameters: ",Object(r.b)("inlineCode",{parentName:"p"},"R")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Context"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"R")," representes the dependencies of the service. All the effects being returned by these methods depend on ",Object(r.b)("inlineCode",{parentName:"li"},"R")," to encode this dependency."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"Context")," represents any domain object that you would like your RPC methods to have available in the environment.")),Object(r.b)("p",null,"You can set both ",Object(r.b)("inlineCode",{parentName:"p"},"R")," and ",Object(r.b)("inlineCode",{parentName:"p"},"Context")," to be ",Object(r.b)("inlineCode",{parentName:"p"},"Any")," when implementing a service to indicate that the service does not have any dependencies or expectations from the environment. Since it is very common situation, especially when getting started, you can have your service implementation extends ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceName")," which is a type alias to ",Object(r.b)("inlineCode",{parentName:"p"},"ZServiceName[Any, Any]"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"trait ServiceNameImpl extends ServiceName {\n}\n")),Object(r.b)("p",null,"Learn more about using ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/zio-grpc/docs/context"}),"context and dependencies")," in the next section."),Object(r.b)("div",{className:"admonition admonition-info alert alert--info"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"Why ",Object(r.b)("inlineCode",{parentName:"strong"},"Any")," means that there are no dependencies?")," All Scala objects are instances of ",Object(r.b)("inlineCode",{parentName:"p"},"Any"),". Therefore, any object that is provided as a dependency to our service would satisfy being of type ",Object(r.b)("inlineCode",{parentName:"p"},"Any"),". In other words, there is no specific instance type required."))),Object(r.b)("h3",{id:"running-the-server"},"Running the server"),Object(r.b)("p",null,"The easiest way to run a service, is to create an object that extends ",Object(r.b)("inlineCode",{parentName:"p"},"scalapb.zio_grpc.ServerMain"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"import scalapb.zio_grpc.{ServerMain, ServiceList}\n\nobject MyMain extends ServerMain {\n  def services = ServiceList.add(ServiceNameImpl)\n\n  // Default port is 9000\n  override def port: Int = 8980\n}\n")),Object(r.b)("p",null,"You can also override ",Object(r.b)("inlineCode",{parentName:"p"},"def port: Int")," to set a port number (by default port 9000 is used)."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"ServiceList")," contains additional methods to add services to the service list that can be used when the service must be created effectfully, or wrapped in a managed, or provided to you as a layer."),Object(r.b)("h2",{id:"client-trait"},"Client trait"),Object(r.b)("p",null,"The generated client follows ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://zio.dev/docs/howto/howto_use_layers"}),"ZIO's module pattern"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"type ServiceNameClient = Has[ServiceNameClient.Service]\nobject ServiceNameClient {\n  trait ZService[R] {\n    // methods for use as a client\n    def sayHello(request: HelloRequest): ZIO[R, Status, HelloReply]\n  }\n  type Service = ZService[Any]\n\n  // accessor methods\n  def sayHello(request: HelloRequest): ZIO[ServiceNameClient, Status, HelloReply]\n\n  def managed[R](\n      managedChannel: ZManagedChannel[R],\n      options: CallOptions = io.grpc.CallOptions.DEFAULT,\n      headers: zio.UIO[SafeMetadata] = scalapb.zio_grpc.SafeMetadata.make\n  ): zio.Managed[Throwable, ServiceNameClient.ZService[R]]\n\n  def live[R](\n      managedChannel: ZManagedChannel[R],\n      options: CallOptions = io.grpc.CallOptions.DEFAULT,\n      headers: zio.UIO[scalapb.zio_grpc.SafeMetadata] = scalapb.zio_grpc.SafeMetadata.make\n  ): zio.ZLayer[R, Throwable, ServiceNameClient]\n}\n")),Object(r.b)("p",null,"We have two ways to use a client: through a managed resource, or through a layer. In both cases, we start by creating a ",Object(r.b)("inlineCode",{parentName:"p"},"ZManagedChannel"),", which represents a communication channel to a gRPC server as a managed resource. Since it is wrapped in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://zio.dev/docs/datatypes/datatypes_managed"}),"ZIO's ",Object(r.b)("inlineCode",{parentName:"a"},"Managed")),", proper shutdown of the channel is guaranteed:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"type ZManagedChannel[R] = Managed[Throwable, ZChannel[R]]\n")),Object(r.b)("p",null,"Creating a channel:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),'import scalapb.zio_grpc.ZManagedChannel\nimport io.grpc.ManagedChannelBuilder\n\nval channel = ZManagedChannel(\n  ManagedChannelBuilder\n    .forAddress("localhost", 8980)\n    .usePlaintext()\n)\n// channel: ZManagedChannel[Any] = zio.ZManaged@5718235a\n')),Object(r.b)("h3",{id:"using-the-client-as-a-layer"},"Using the client as a layer"),Object(r.b)("p",null,"A single ",Object(r.b)("inlineCode",{parentName:"p"},"ZManagedChannel")," represent a virtual connection to a conceptual endpoint to perform RPCs. A channel can have many actual connection to the endpoint. Therefore, it is very common to have a single service client for each RPC service you are using. Therefore, it makes sense to have a singleton client and provide access to it to your effects through a ",Object(r.b)("inlineCode",{parentName:"p"},"ZLayer"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"import myexample.testservice.ZioTestservice.ServiceNameClient\nimport myexample.testservice.{Request, Response}\nimport zio._\nimport zio.console._\n\nval clientLayer = ServiceNameClient.live(channel)\n// clientLayer: ZLayer[Any, Throwable, ServiceNameClient] = Managed(\n//   zio.ZManaged@2a6dc4cd\n// )\n\nval myAppLogicNeedsEnv = for {\n  res <- ServiceNameClient.unary(Request())\n  _ <- putStrLn(res.toString)\n} yield ()\n// myAppLogicNeedsEnv: ZIO[ServiceNameClient with Console, io.grpc.Status, Unit] = zio.ZIO$FlatMap@c74b1a\n\nval myAppLogic1 = myAppLogicNeedsEnv.provideCustomLayer(clientLayer)\n// myAppLogic1: ZIO[ZEnv, Object, Unit] = zio.ZIO$CheckInterrupt@32212330\n\nobject LayeredApp extends zio.App {\n  def run(args: List[String]): URIO[ZEnv, ExitCode] = myAppLogic1.exitCode\n}\n")),Object(r.b)("p",null,"Here the application is broken to multiple value assignments so you can see the types.\nThe first effect ",Object(r.b)("inlineCode",{parentName:"p"},"myAppLogicNeedsEnv")," uses accessor functions, which makes it depend on  an environment of type ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceNameClient"),". It chains the ",Object(r.b)("inlineCode",{parentName:"p"},"unary")," RPC with printing the result to the console, and hence the final inferred effect type is ",Object(r.b)("inlineCode",{parentName:"p"},"ServiceNameClient with Console"),". Once we provide our custom layer, the effect type is ",Object(r.b)("inlineCode",{parentName:"p"},"ZEnv"),", which we can use with ZIO's run method."),Object(r.b)("h3",{id:"using-a-managed-client"},"Using a Managed Client"),Object(r.b)("p",null,"As an alternative to using ZLayer, you can use the client through a managed resource:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-scala"}),"import myexample.testservice.ZioTestservice.ServiceNameClient\nimport myexample.testservice.{Request, Response}\n\nval clientManaged = ServiceNameClient.managed(channel)\n// clientManaged: Managed[Throwable, ServiceNameClient.ZService[Any]] = zio.ZManaged@25fa64d\n\nval myAppLogic = for {\n  res <- clientManaged.use(\n    client =>\n      client.unary(Request()).mapError(_.asRuntimeException)\n  )\n} yield res\n// myAppLogic: ZIO[Any, Throwable, Response] = zio.ZIO$FlatMap@7983c323\n")),Object(r.b)("p",null,"Since the service acquistion (through the ZManaged) can fail with a ",Object(r.b)("inlineCode",{parentName:"p"},"Throwable"),", and the RPC effects of ZIO gRPC can fail with ",Object(r.b)("inlineCode",{parentName:"p"},"Status")," (which is not a subtype of ",Object(r.b)("inlineCode",{parentName:"p"},"Throwable"),"), we use ",Object(r.b)("inlineCode",{parentName:"p"},"mapError")," to map the RPC error to a ",Object(r.b)("inlineCode",{parentName:"p"},"StatusRuntimeException"),". This way, the resulting effect can fail with a ",Object(r.b)("inlineCode",{parentName:"p"},"Throwable"),"."))}p.isMDXComponent=!0},170:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),p=function(e){var n=i.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,u=d["".concat(c,".").concat(m)]||d[m]||b[m]||r;return t?i.a.createElement(u,o(o({ref:n},s),{},{components:t})):i.a.createElement(u,o({ref:n},s))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<r;s++)c[s]=t[s];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);