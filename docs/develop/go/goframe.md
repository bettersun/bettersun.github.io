# GoFrame

## 简单API开发

1. 初始化项目

    本例使用xgo。  
    新建xgo目录，然后进入目录后，执行命令 gf init xgo  

    ```
    gf init xgo
    ```

2. 新建api

    本例机能使用 welcome。  
    在./app/api目录下，新建机能目录。  
    在新建的机能目录下新建api的代码文件。  

    代码文件路径：  
    ./app/api/welcome/welcome.go

    代码内容：  
    ```
    package welcome

    import (
        "github.com/gogf/gf/net/ghttp"
    )

    // 
    func Welcome(r *ghttp.Request) {
        r.Response.Writeln("Welcome to goframe!")
    }
    ```

    包名使用welcome。  
    引入goframe封装的ghttp。  
    编写API的处理函数，函数的参数是goframe封装的gttp.Request的指针。  

3. 编写中间件

    本例编写一个跨域中间件  
    在根目录下新建目录middleware。  
    在middleware目录新建cors.go  

    代码内容：
    ```
    package middleware

    import "github.com/gogf/gf/net/ghttp"

    // 允许接口跨域请求
    func CORS(r *ghttp.Request) {
        r.Response.CORSDefault()
        r.Middleware.Next()
    }
    ```

4. 注册路由

    默认的路由文件在./router/router.go中。  

    官方示例中的说明：  
    > // 你可以将路由注册放到一个文件中管理，  
    > // 也可以按照模块拆分到不同的文件中管理，  
    > // 但统一都放到router目录下。  

    本例先放在单一文件中。  

    代码内容：
    ```
    package router

    import (
        "github.com/gogf/gf/frame/g"
        "github.com/gogf/gf/net/ghttp"

        "xgo/app/api/hello"
        "xgo/app/api/welcome"

        "xgo/middleware"
    )

    func init() {
        s := g.Server()
        s.Group("/", func(group *ghttp.RouterGroup) {

            group.Middleware(middleware.CORS)

            group.ALL("/", hello.Hello)
            group.ALL("/welcome", welcome.Welcome)
        })
    }

    ```

5. 运行服务

    ```
    go run main.go
    ```

    运行服务后可在控制台看到所有服务的路由。

6. 访问URL

    访问 http://localhost:8199/welcome

    输出结果：  
    ```
    Welcome to goframe!
    ```

7. API返回JSON

    使用ghttp.Request.Response.WriteJson()方法返回JSON。  
    修改 ./app/api/welcome/welcome.go  

    ```
    package welcome

    import (
        "github.com/gogf/gf/net/ghttp"
    )

    type WelcomeInfo struct {
        Message string `json:"message"`
    }

    func Welcome(r *ghttp.Request) {
        var welcomeInfo WelcomeInfo
        welcomeInfo.Message = "Welcome to goframe!"

        r.Response.WriteJson(welcomeInfo)
    }
    ```

    首先定义 WelcomeInfo 结构体，添加一个可导出属性Message，并指定json解析用键值。  
    Welcome方法中，给WelcomeInfo实例的Message属性设定一个值。  
    然后使用 ghttp.Request.Response.WriteJson() 返回JSON。  

    访问URL后返回的原始数据为：  
    ```json
    {"message":"Welcome to goframe!"}
    ```

## 使用Controller

> 基于前面的工程

1. 添加Controller

    在./app/api/welcome/welcome.go里定义一个空的结构体Controller作为API管理对象。  
    路由注册时只需要把Controller注册给 /welcome，然后所有Controller指针的导出函数都会自动映射到对应的URL。  
    非导出函数不会被映射。  

    映射规则：  
    - 函数名的首字母大写，映射到对应的URL的首字母小写。  
    - 函数名中间的大写字母会映射为 短线+小写字母。  
    
    例：  
    WelcomeMessage()函数映射的URL为 /welcome/welcome-message。  

    例如：  
    welcome.go里为Controller定义了一个方法：  
    ```
    package welcome

    import (
        "github.com/gogf/gf/net/ghttp"
    )

    type Controller struct{}

    func (c *Controller) Come(r *ghttp.Request) {

        r.Response.Writeln("Come to goframe!")
    }

    ```

2. 改变路由注册方式
   
   新建一个welcome的Controller实例。  
   然后把这个Controller实例注册到 /welcome 。  

    ```
    package router

    import (
        "github.com/gogf/gf/frame/g"
        "github.com/gogf/gf/net/ghttp"

        "xgo/app/api/hello"
        "xgo/app/api/welcome"

        "xgo/middleware"
    )

    func init() {
        s := g.Server()
        s.Group("/", func(group *ghttp.RouterGroup) {

            ctlWelcome := new(welcome.Controller)

            group.Middleware(middleware.CORS)

            group.ALL("/", hello.Hello)
            group.ALL("/welcome", ctlWelcome)
        })
    }
    ```

3. 运行服务

    运行服务后可在控制台看到所有服务的路由。  
    可以看到，./app/api/welcome/welcome.go里Controller的Come函数自动注册到/welcome/come的URL。  

4. 访问URL

    访问 http://localhost:8199/welcome/come
    
    输出结果：  
    ```
    Come to goframe!
    ```

## 使用Controller并调用Service

> 基于前面的工程

1. 新建Service用代码文件

    在./app/api/service目录下新建welcome目录，在welcome目录下新建welcome.go文件。  

    代码路径：  
    ./app/api/service/welcome/welcome.go  

    代码内容：
    ```
    package welcome

    type WelcomeInfo struct {
        Message string `json:"message"`
    }

    func Message() string {
        return "Welcome to goframe!"
    }

    func Info() WelcomeInfo {

        var welcomeInfo WelcomeInfo
        welcomeInfo.Message = "Welcome to goframe!"

        return welcomeInfo
    }
    ```

2. 在API文件Controller的函数中调用Service

    需要引入服务的机能包。  

    ```
    package welcome

    import (
        "github.com/gogf/gf/net/ghttp"

        "xgo/app/service/welcome"
    )

    type Controller struct{}

    func (c *Controller) Message(r *ghttp.Request) {

        message := welcome.Message()
        r.Response.Writeln(message)
    }

    func (c *Controller) Info(r *ghttp.Request) {

        welcomeInfo := welcome.Info()
        r.Response.WriteJson(welcomeInfo)
    }
    ```

3. 运行服务后访问URL确认。

    - 访问 http://localhost:8199/welcome/message

    输出结果：
    ```
    Welcome to goframe!
    ```

    - 访问 http://localhost:8199/welcome/info
    
    输出结果：
    ```json
    {"message":"Welcome to goframe!"}
    ```

## 访问数据库

> 基于前面的工程

1. 创建数据库

MySQL
```sql
CREATE SCHEMA `db_xgo` DEFAULT CHARACTER SET utf8mb4 ;
```

2. 修改配置文件里的数据库连接

```toml
# Database.
[database]
    link  = "mysql:root:123456@tcp(127.0.0.1:3306)/db_xgo"
    debug = true
    # Database logger.
    [database.logger]
        Path   = "/tmp/log/gf-app/sql"
        Level  = "all"
        Stdout = true
```

3. 新建表

    新建系统用户表 sys_user。

```
CREATE TABLE `db_xgo`.`sys_user` (
  `id` INT NOT NULL,
  `user_id` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `user_name` VARCHAR(45) NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `user_id_UNIQUE` (`user_id` ASC));
```

4. 执行GoFrame的命令生成数据库表操作相关代码
   
    GoFrame命令官方文档：
    https://goframe.org/toolchain/cli#

    在Go程序根目录下启动命令行执行命令
    ```
    gf gen model ./app/model
    ```

    所有表的操作代码都会被生成。
    上述命令的执行过程。

    ```
    E:\develop\github.com\bettersun\xgo\xgo>gf gen model ./app/model
    path './app/model' is not empty, files might be overwrote, continue? [y/n]: y
    2020-07-28 16:48:41.084 [DEBU] [  7 ms] SHOW TABLES
    2020-07-28 16:48:41.157 [DEBU] [  2 ms] SHOW FULL COLUMNS FROM `sys_user`
    generated: ./app/model\sys_user\sys_user.go
    generated: ./app/model\sys_user\sys_user_entity.go
    generated: ./app/model\sys_user\sys_user_model.go
    done!
    ```

5. 添加表操作代码

    在./app/service/welcome/welcome.go里添加函数，在函数里执行对表的查询。

    ```
    func WelecomeUser() string {

        var message string
        sysUser, err := sys_user.FindAll()

        if err != nil {
            fmt.Println(err)
            message = "Error"
            return message
        }

        if len(sysUser) > 0 {
            message = "Welcome, " + sysUser[0].UserName + "."
        } else {
            message = "No user."
        }

        return message
    }
    ```

6. 添加路由函数
   
    在./app/api/welcome/welcome.go里添加函数，在函数里调用Service里的函数。

    ```
    func (c *Controller) WelcomeUser(r *ghttp.Request) {

        WelecomeUser := welcome.WelecomeUser()
        r.Response.Writeln(WelecomeUser)
    }
    ```

7. 运行服务访问URL
   
    访问 http://localhost:8199/welcome/welcome-user

    输出结果：
    ```
    No user.
    ```

8. 在数据库表中添加数据

    ```sql
    INSERT INTO `db_xgo`.`sys_user` (`id`, `user_id`, `password`, `user_name`) VALUES ('1', 'bettersun', '123456', '此心光明');
    ```

    > 确保已提交。

9. 再次访问URL
    
    访问 http://localhost:8199/welcome/welcome-user

    输出结果：
    ```
    Welcome, 此心光明.
    ```
