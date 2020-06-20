(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{568:function(t,a,e){"use strict";e.r(a);var s=e(20),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"three-js-入门小技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#three-js-入门小技巧"}},[t._v("#")]),t._v(" Three.js 入门小技巧")]),t._v(" "),e("h3",{attrs:{id:"官方网站"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#官方网站"}},[t._v("#")]),t._v(" 官方网站")]),t._v(" "),e("p",[t._v("官方文档：\nhttps://threejs.org/docs/index.html\n可进入后切换到中文文档。\n官方文档中API已相对完整。\n场景中需要的灯光、几何体、材质等都有相关说明。")]),t._v(" "),e("p",[t._v("官方示例：\nhttps://threejs.org/examples/")]),t._v(" "),e("h3",{attrs:{id:"坐标系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#坐标系"}},[t._v("#")]),t._v(" 坐标系")]),t._v(" "),e("p",[t._v("简单可理解为：X轴向右，Y轴向上，Z轴向外。\n坐标原点为 (X, Y, Z) : (0, 0, 0)")]),t._v(" "),e("p",[t._v("http://www.mamicode.com/info-detail-2104493.html")]),t._v(" "),e("h3",{attrs:{id:"位置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#位置"}},[t._v("#")]),t._v(" 位置")]),t._v(" "),e("p",[t._v("所有物体的默认位置都是坐标原点 (0, 0, 0);")]),t._v(" "),e("h3",{attrs:{id:"旋转"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#旋转"}},[t._v("#")]),t._v(" 旋转")]),t._v(" "),e("p",[t._v("旋转的值是弧度")]),t._v(" "),e("blockquote",[e("p",[t._v("角度 = 弧度 * 2 * PI")])]),t._v(" "),e("p",[t._v("0.25 * 2 * PI ： 即旋转1/4圈（90度）")]),t._v(" "),e("h3",{attrs:{id:"材质"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#材质"}},[t._v("#")]),t._v(" 材质")]),t._v(" "),e("blockquote",[e("p",[t._v("MeshBasicMaterial：对光照无感，给几何体一种简单的颜色或显示线框。\nMeshLambertMaterial：这种材质对光照有反应，用于创建暗淡的不发光的物体。\nMeshPhongMaterial：这种材质对光照也有反应，用于创建金属类明亮的物体。\n参考： https://www.cnblogs.com/xulei1992/p/5737138.html")])]),t._v(" "),e("h3",{attrs:{id:"小技巧"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),e("p",[t._v("1 场景最好添加一个参照平面，如地面，桌面之类的平面。\n其它物体以此平面为参照添加或调整。\n平面的Y轴不一定要在坐标原点的Y轴。\n2 物体的组合在坐标原点组合好，再移动位置。\n物体间的位置使用相对位置计算好。\n3 需要旋转的物体，如果也需要改变位置的话，先旋转再改变位置调整起来会比较直观。\n4 使用ThreeBSP.js组合物体，会以参与计算的第一个物体的坐标位置作为整个物体的坐标位置。\n5 同一颜色或同一材质的部分可合并成一个物体。\n6 同一物体可由不同物体多种形式组合，可权衡采用计算最少、调整最少的组合。")]),t._v(" "),e("h3",{attrs:{id:"示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),e("p",[t._v("https://github.com/bettersun/hellothreejs.git")])])}),[],!1,null,null,null);a.default=r.exports}}]);