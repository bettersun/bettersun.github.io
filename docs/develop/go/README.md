# GoLang

## go mod

go mod tidy 会自动下载所需的包，如果不设定GOPROXY，将使用direct模式。
direct模式下被墙的话，无法下载包。

解决方法是设置GOPROXY，这样就可以不在go.mod文件中设定replace。

修改操作系统的环境变量
Linux / Mac
```
export GOPROXY=https://goproxy.cn
```

Windows在环境变量设置界面设定即可。

#### GoLand 
GoLand需要在 Settings - Go - Go Modules 里设定 Proxy。
GoLand还不知道如何全局设置，暂时每个项目都手动设置。