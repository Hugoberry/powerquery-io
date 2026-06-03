---
title: DB2.Database
---

# DB2.Database


返回 Db2 数据库中可用的 SQL 表和视图的表。


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

返回服务器 `server` (在名为 `database` 的数据库实例中)上 Db2 数据库中可用的 SQL 表和视图的表。可以视需要指定服务器的端口，并用冒号分隔。可以指定可选的记录参数 `options` 来控制以下选项:

-   `CreateNavigationProperties` : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。
-   `NavigationPropertyNameGenerator` : 一个函数，用于创建导航属性的名称。
-   `Query` : 用于检索数据的本机 SQL 查询。如果查询生成多个结果集，则仅返回第一个结果集。
-   `CommandTimeout` : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。
-   `ConnectionTimeout` : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。
-   `HierarchicalNavigation` : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。
-   `Implementation` : 指定要使用的内部数据库提供程序实现。有效值为: "IBM" 和 "Microsoft"。
-   `BinaryCodePage` : CCSID (编码字符集标识符)的编号，用于将 Db2 FOR BIT 二进制数据解码为字符串。适用于 Implementation = "Microsoft"。设置为 0 可禁用转换(默认值)。设置为 1 可根据数据库编码进行转换。设置其他 CCSID 编号可转换为应用程序编码。
-   `PackageCollection` : 为包集合指定字符串值(默认值为 "NULLID")以启用处理 SQL 语句所需的共享包。适用于 Implementation = "Microsoft"。
-   `UseDb2ConnectGateway` : 指定是否通过 Db2 连接网关进行连接。适用于实现 = "Microsoft"。

例如，可以将记录参数指定为 \[option1 = value1, option2 = value2...\] 或 \[Query = "select ..."\]。



## Category
Accessing data
