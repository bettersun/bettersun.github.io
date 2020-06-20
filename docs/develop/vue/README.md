
# vue cli3 搭建项目 使用vue-router 以及 element-ui

[vue cli3 搭建项目 使用vue-router 以及 element-ui](https://www.jianshu.com/p/b45dd32adde9)

重点：
```
5.将App.vue中的示例代码删掉，在div中写 <router-view/>
```

```
new Vue({
  router,   //将router开放出去
  render: h => h(App),
}).$mount('#app')
```

# vue cli3 解决打包后静态资源找不到的问题

```
// vue.config.js
module.exports = {
    // 选项...
    "publicPath": "./", // 解决打包后静态资源找不到的问题
    "assetsDir": "./"
}
```