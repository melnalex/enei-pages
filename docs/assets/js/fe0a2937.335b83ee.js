"use strict";(self.webpackChunkeasy_query_docs_docusaurus=self.webpackChunkeasy_query_docs_docusaurus||[]).push([[230],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),y=r,m=d["".concat(s,".").concat(y)]||d[y]||p[y]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1372:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={},i="Getting started for WPF",l={unversionedId:"easyquery/getting-started/getting-started-for-wpf",id:"easyquery/getting-started/getting-started-for-wpf",title:"Getting started for WPF",description:"NB: The easiest way to start getting acquainted with EasyQuery framework is to install and launch our demo projects available on GitHub. You can clone that repository with samples, download it as a ZIP archive or even Open it in Visual Studio right away!",source:"@site/docs/easyquery/getting-started/getting-started-for-wpf.md",sourceDirName:"easyquery/getting-started",slug:"/easyquery/getting-started/getting-started-for-wpf",permalink:"/docs/easyquery/getting-started/getting-started-for-wpf",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/easyquery/getting-started/getting-started-for-wpf.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting started for ASP.NET 4",permalink:"/docs/easyquery/getting-started/getting-started--asp-net-4"},next:{title:"EasyReport Docs",permalink:"/docs/category/easyreport-docs"}},s={},u=[{value:"0. Choose the way you create and use your data model",id:"0-choose-the-way-you-create-and-use-your-data-model",level:2},{value:"1. Install EasyQuery packages",id:"1-install-easyquery-packages",level:2},{value:"2. Add visual controls (QueryPanel, EntitiesPanel, ColumnsPanel)",id:"2-add-visual-controls-querypanel-entitiespanel-columnspanel",level:2},{value:"3. Initialize DbQuery and DbModel",id:"3-initialize-dbquery-and-dbmodel",level:2},{value:"4. Setup the connection",id:"4-setup-the-connection",level:2},{value:"5. Generate SQL and execute the query",id:"5-generate-sql-and-execute-the-query",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-for-wpf"},"Getting started for WPF"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"NB"),": The easiest way to start getting acquainted with EasyQuery framework is to install and launch our demo projects available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples"},"GitHub"),". You can clone that repository with samples, ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/archive/master.zip"},"download it")," as a ZIP archive or even ",(0,r.kt)("button",null,(0,r.kt)("a",{parentName:"p",href:"git-client://clone?repo=https%3A%2F%2Fgithub.com%2Feasyquery%2FNet4Samples"},"Open it in Visual Studio"))," right away!")),(0,r.kt)("p",null,"Below you will find the instructions of what to do if you are going to add EasyQuery to your WPF application from the scratch."),(0,r.kt)("h2",{id:"0-choose-the-way-you-create-and-use-your-data-model"},"0. Choose the way you create and use your data model"),(0,r.kt)("p",null,"Data model - is a user-friendly representation of your project's database which is used by different EasyQuery components to show available entities, their attributes, conditional operators and the lists of available values during the query building process. So, first of all, you will need to choose the way you create your data model and/or load it in your application. There are several different ways of doing this. For more information please read ",(0,r.kt)("a",{parentName:"p",href:"/$aid/d3296080-f7cd-4e32-b6ea-1e5319948c82"},"$$-Working with data model in EasyQuery-$$")," article first."),(0,r.kt)("p",null,"In this article, we assume that your data model is created with Data Model Editor, then saved to some JSON (or XML) file and that file is added to your project."),(0,r.kt)("h2",{id:"1-install-easyquery-packages"},"1. Install EasyQuery packages"),(0,r.kt)("p",null,"Use NuGet Package Manager to install the following package:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Korzh.EasyQuery.Wpf")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Korzh.EasyQuery.DataExport")," - if you will need the data exporting functions"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Korzh.EasyQuery.MsSqlGate")," (or ",(0,r.kt)("inlineCode",{parentName:"li"},".MySqlGate")," or ",(0,r.kt)("inlineCode",{parentName:"li"},".OdbcGate")," - depending on your DB) - if you need to load your model directly from DB connection.")),(0,r.kt)("h2",{id:"2-add-visual-controls-querypanel-entitiespanel-columnspanel"},"2. Add visual controls (QueryPanel, EntitiesPanel, ColumnsPanel)"),(0,r.kt)("p",null,"First of all you will need to add EasyQuery visual controls on your form. The best way to do it - is simply to copy XAML markup from our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/blob/master/EqWpfDemo/MainWindow.xaml"},"sample project")," and then modify it according to your needs."),(0,r.kt)("h2",{id:"3-initialize-dbquery-and-dbmodel"},"3. Initialize DbQuery and DbModel"),(0,r.kt)("p",null,"After that you will need to add DbQuery and DbModel objects to your form, initalize them properly and connect with the visual controls through their ",(0,r.kt)("inlineCode",{parentName:"p"},"Query")," property.\nHere is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'private DbModel _model;\nprivate DbQuery _query;\nprivate string _appDirectory;\nprivate string _dataFolder\n\n\npublic MainForm()\n{\n    _appDirectory = System.IO.Directory.GetCurrentDirectory();\n    _dataFolder = System.IO.Path.Combine(_appDirectory, "App_Data");\n\n    InitializeComponent();\n    _model = new DbModel();\n    _query = new DbQuery(_model);\n\n    QueryPanel1.Query = _query;\n    ColumnsPanel1.Query = _query;\n    EntitiesPanel1.Query = _query;\n\n    _model.LoadFromJsonFile(System.IO.Path.Combine(_dataFolder, "NWindSQL.json"));\n}\n')),(0,r.kt)("p",null,"Try to build and start your project. If everything was done correctly - you will see the EntitiesPanel loaded with entities stored in your data model."),(0,r.kt)("h2",{id:"4-setup-the-connection"},"4. Setup the connection"),(0,r.kt)("p",null,"Most probably you already have a DbConnection object in your form class (if you worked with it before installing EasyQuery). In this case just skip this section. Furthermore, we suppose that your connection object is accessible by ",(0,r.kt)("inlineCode",{parentName:"p"},"_connection")," field."),(0,r.kt)("p",null,"If you don't have a connection yet, you will need to add the following piece of code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'private SqlConnection _connection;\n\nprivate void CheckConnection()\n{\n    try {\n        if (_connection == null) {\n            string currentDir = System.IO.Directory.GetCurrentDirectory();\n            var connectionString = ConfigurationManager.ConnectionStrings["DefaultConnection"]?.ToString();\n            _connection = new SqlConnection(connectionString);\n        }\n        \n        if (_connection.State != ConnectionState.Open) {\n            _connection.Open();\n        }\n    }\n    catch (Exception ex) {\n        MessageBox.Show(ex.Message);\n    }\n}\n')),(0,r.kt)("h2",{id:"5-generate-sql-and-execute-the-query"},"5. Generate SQL and execute the query"),(0,r.kt)("p",null,"When it's necessary to generate an SQL statement for the query entered by user via EasyQuery visual controls (for example, on click on some Execute button) -  you will need to create an instance of ",(0,r.kt)("inlineCode",{parentName:"p"},"SqlQueryBuilder")," class and call its BuildSQL() method.  After that, you can read generated SQL from Result.SQL property and pass it to some DataSource for execution (or use it in any other possible way)."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C#"},'protected void ExecuteBtn_Click(object sender, EventArgs e) { \n    SqlQueryBuilder builder = new SqlQueryBuilder(_query);\n    if (builder.CanBuild) {\n        builder.BuildSQL();\n        string sql = builder.Result.SQL;\n\n        try { \n            CheckConnection();\n            DataSet resultDS = new DataSet();\n            var resultDA = new SqlDataAdapter(sql, _connection); \n            resultDA.Fill(resultDS, "Result");\n            dataGrid.ItemsSource = resultDS.Tables[0].DefaultView;   \n        }  \n        catch (Exception ex) { \n            //if some error occurs just show the error message  \n            MessageBox.Show(ex.Message);       \n        }  \n    }\n} \n')),(0,r.kt)("p",null,"(Here ",(0,r.kt)("inlineCode",{parentName:"p"},"dataGrid")," - is a reference to some DataGrid visual control placed on your form)."),(0,r.kt)("p",null,"For more detailed examples and a ready-to-use code - please take a look at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/easyquery/Net4Samples/tree/master/EqWpfDemo"},"EasyQuery WPF demo project published on GitHub"),"."))}p.isMDXComponent=!0}}]);