(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{568:function(s,t,a){"use strict";a.r(t);var e=a(20),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"vuepress-gitpages-部署问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vuepress-gitpages-部署问题"}},[s._v("#")]),s._v(" VuePress GitPages 部署问题")]),s._v(" "),a("h3",{attrs:{id:"travis-提示-gh-token-is-invalid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#travis-提示-gh-token-is-invalid"}},[s._v("#")]),s._v(" Travis 提示 gh-token is invalid")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("gh"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("token is invalid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v(" Details"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GET")]),s._v(" https"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("user"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("401")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" Bad credentials "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// See: https://developer.github.com/v3")]),s._v("\n")])])]),a("p",[s._v("解决方法：")]),s._v(" "),a("ol",[a("li",[s._v("在Travis的仓库Settings里删除原有的GITHUB_TOKEN变量")]),s._v(" "),a("li",[s._v("在GitHub生成新的TOKEN，生成后记得复制。")]),s._v(" "),a("li",[s._v("在Travis的仓库Settings里添加新的GITHUB_TOKEN变量，用在GitHub里生成的新TOKEN的值。")])]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("deploy"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n  provider"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" pages\n  skip_cleanup"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  local_dir"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" docs"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("vuepress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("dist\n  github_token"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" $"),a("span",{pre:!0,attrs:{class:"token constant"}},[s._v("GITHUB_TOKEN")]),s._v(" # 在 GitHub 中生成，用于允许 Travis 向你的仓库推送代码。在 Travis 的项目设置页面进行配置，设置为 secure variable\n  keep_history"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n  on"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n    branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" master\n  target_branch"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" master\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);