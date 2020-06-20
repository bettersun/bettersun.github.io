# Electron


## Electron vue

### Electron部分
1. 新建目录xxx, 本例使用bettertool 。
2. 进入目录，执行npm init。
```
npm init
```

```
package name: (bettertool)
version: (1.0.0)
description:
entry point: (index.js) main.js
test command:
git repository: (https://github.com/bettersun/bettertool)
keywords:
author:
license: (ISC) MIT
About to write to E:\develop\bettertool\package.json:

{
  "name": "bettertool",
  "version": "1.0.0",
  "description": "vue go-astilectron electron",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/bettersun/bettertool.git"
  },
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/bettersun/bettertool/issues"
  },
  "homepage": "https://github.com/bettersun/bettertool#readme"
}


Is this OK? (yes) yes

E:\develop\bettertool>

```

3. 安装electron
```
yarn add electron
```
> cnpm 不太稳定，npm 比较慢，本例使用 yarn。


4. 添加 main.js, index.html

> 复制自 https://www.electronjs.org/docs/tutorial/first-app#installing-electron

main.js
```js
   const { app, BrowserWindow } = require('electron')

function createWindow () {   
  // 创建浏览器窗口
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 并且为你的应用加载index.html
  win.loadFile('index.html')

  // 打开开发者工具
  win.webContents.openDevTools()
}

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow)

//当所有窗口都被关闭后退出
app.on('window-all-closed', () => {
  // 在 macOS 上，除非用户用 Cmd + Q 确定地退出，
  // 否则绝大部分应用及其菜单栏会保持激活。
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // 在macOS上，当单击dock图标并且没有其他窗口打开时，
  // 通常在应用程序中重新创建一个窗口。
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

// 您可以把应用程序其他的流程写在在此文件中
// 代码 也可以拆分成几个文件，然后用 require 导入。
```

index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <!-- https://electronjs.org/docs/tutorial/security#csp-meta-tag -->
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using node <script>document.write(process.versions.node)</script>,
    Chrome <script>document.write(process.versions.chrome)</script>,
    and Electron <script>document.write(process.versions.electron)</script>.
  </body>
</html>
```

5. 添加启动命令到 package.json 

> 复制自 https://www.electronjs.org/docs/tutorial/first-app#installing-electron

```
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

6. 启动electron应用

```
yarn start
```

### Vue部分
1. 创建vue工程目录xxx, 本例使用vue_source

```
vue create vue_source
```

```
E:\develop\bettertool>vue create vue_source


Vue CLI v4.4.1
┌─────────────────────────────────────────┐
│                                         │
│   New version available 4.4.1 → 4.4.4   │
│    Run npm i -g @vue/cli to update!     │
│                                         │
└─────────────────────────────────────────┘

? Please pick a preset: default (babel, eslint)


Vue CLI v4.4.1
✨  Creating project in E:\develop\bettertool\vue_source.
⚙️  Installing CLI plugins. This might take a while...

yarn install v1.22.4
info No lockfile found.
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.1.3: The platform "win32" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.


success Saved lockfile.
Done in 52.80s.
�  Invoking generators...
�  Installing additional dependencies...

yarn install v1.22.4
[1/4] Resolving packages...
[2/4] Fetching packages...
info fsevents@2.1.3: The platform "win32" is incompatible with this module.
info "fsevents@2.1.3" is an optional dependency and failed compatibility check. Excluding it from installation.
info fsevents@1.2.13: The platform "win32" is incompatible with this module.
info "fsevents@1.2.13" is an optional dependency and failed compatibility check. Excluding it from installation.
[3/4] Linking dependencies...
[4/4] Building fresh packages...

success Saved lockfile.
Done in 10.65s.
⚓  Running completion hooks...

�  Generating README.md...

�  Successfully created project vue_source.
�  Get started with the following commands:

 $ cd vue_source
 $ yarn serve


E:\develop\bettertool>
```

2. 进入到 vue 工程子目录，确认正常启动vue工程。

```
$ cd vue_source
$ yarn serve
```

3. 从入门到放弃。。。


## electron-vue

1. Install vue-cli and scaffold boilerplate

```
npm install -g vue-cli
vue init simulatedgreg/electron-vue my-project
```

2. Install dependencies and run your app

```
cd my-project
yarn # or npm install
yarn run dev # or npm run dev
```
