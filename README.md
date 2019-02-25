# testApi

#### 介绍
基于leanCloud的api接口服务，为其他项目提供数据接口服务；

#### 软件架构

1、基于NodeJs的项目架构，借助于LeanCloud进行数据存储和管理；

2、开源生态系统的其他应用以get方式进行数据获取，数据以JSON的格式返回；

3、应用获取数据，根据需要进行展示；

#### 安装教程

#####1、<a href="https://leancloud.cn">注册leancloud账号</a>

#####2、<a href="https://leancloud.cn/dashboard/applist.html#/newapp">创建应用</a>

#####3、<a href="https://leancloud.cn/docs/leanengine_cli.html">安装lean命令行工具</a>
    brew update
    brew install lean-cli

#####4、基于leanCloud按照<a href="https://leancloud.cn/docs/leanengine_quickstart.html">云引擎快速入门</a>文档：

    lean init
    
    git clone https://github.com/leancloud/node-js-getting-started.git
    cd node-js-getting-started
    
    然后添加应用 appId 等信息到该项目：
    lean switch
    
    首先在当前项目的目录下安装必要的依赖:
    npm install
    
    启动应用：
    lean up
    
    打开浏览器访问 http://localhost:3000 即可进行页面的访问




#### 参与贡献
