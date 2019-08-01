(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{236:function(a,t,s){"use strict";s.r(t);var n=s(0),e=Object(n.a)({},function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"safari-下-date-的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#safari-下-date-的坑","aria-hidden":"true"}},[a._v("#")]),a._v(" Safari 下 Date 的坑")]),a._v(" "),s("blockquote",[s("p",[a._v("2018-10-16")])]),a._v(" "),s("p",[a._v("在 使用 Date 相关 api 的时候要牢记一个坑，就是 Safari 对一些时间格式是不支持的。比如：")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2018-10-16 12:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// 1539662400000 -- 在Chrome 下")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// NaN -- 在Safari下")]),a._v("\n")])])]),s("p",[a._v("问题就出在 Safari 对于这个格式 YYYY-MM-DD HH:MM:SS 无法解析，Safari 要求 Date.parse()或 Date()转换日期的字符串需要满足 RFC2822 或 ISO 8601 定义的格式。不过我们可以将其转化为 YYYY/MM/DD HH:MM:SS")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[a._v("Date"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'2018-10-16 12:00:00'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("replace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token regex"}},[a._v("/-/g")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),s("p",[a._v("相关"),s("a",{attrs:{href:"https://stackoverflow.com/questions/4310953/invalid-date-in-safari",target:"_blank",rel:"noopener noreferrer"}},[a._v("stackoverflow"),s("OutboundLink")],1)])])},[],!1,null,null,null);t.default=e.exports}}]);