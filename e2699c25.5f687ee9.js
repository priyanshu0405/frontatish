(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{146:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),o=r(6),i=(r(0),r(155)),a={id:"withColors",title:"withColors",sidebar_label:"withColors"},c={id:"withColors",isDocsHomePage:!1,title:"withColors",description:"withColors is a higher order component which uses ThemeContext to fetch the current active themeand then use that value to get the colors which should be used as per the active theme.",source:"@site/docs/withColors.md",permalink:"/viserion/docs/withColors",editUrl:"https://github.com/Groww/viserion/edit/alpha/docs/documentation/docs/withColors.md",sidebar_label:"withColors",sidebar:"someSidebar",previous:{title:"useThemeToggle",permalink:"/viserion/docs/useThemeToggle"},next:{title:"BottomFixedView",permalink:"/viserion/docs/bottomfixedview"}},s=[{value:"Usage",id:"usage",children:[]}],l={rightToc:s};function u(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"withColors is a higher order component which uses ",Object(i.b)("strong",{parentName:"p"},"ThemeContext")," to fetch the current active themeand then use that value to get the colors which should be used as per the active theme."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"functionality is very similar to ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:""}),"useColors"),",the only thing is that it is made to be used in class based components.since hooks are not supported in class based components")),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"\nimport { withColors } from 'viserion';\n\nclass App extends React.Component{\n  render() {\n    const { Colors } = this.props;\n    return (\n      <View style={{backgroundColor: Colors.primary}}>\n          <MainApp />\n      </View>\n    );\n  }\n}\nexport default withColors(App);\n")))}u.isMDXComponent=!0},155:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),u=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,b=p["".concat(a,".").concat(d)]||p[d]||h[d]||i;return r?o.a.createElement(b,c(c({ref:t},l),{},{components:r})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);