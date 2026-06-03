---
title: PostgreSQL.Database
---

# PostgreSQL.Database


返回 PostgreSQL 数据库中可用的 SQL 表和视图的表。


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

返回服务器 `server` (在名为 `database` 的数据库实例中)上 PostgreSQL 数据库中可用的 SQL 表和视图的表。可以视需要指定服务器的端口，并用冒号分隔。可以指定可选的记录参数 `options` 来控制以下选项:

-   `CreateNavigationProperties` : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。
-   `NavigationPropertyNameGenerator` : 一个函数，用于创建导航属性的名称。
-   `Query` : 用于检索数据的本机 SQL 查询。如果查询生成多个结果集，则仅返回第一个结果集。
-   `CommandTimeout` : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。
-   `ConnectionTimeout` : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。
-   `HierarchicalNavigation` : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。

例如，可以将记录参数指定为 \[option1 = value1, option2 = value2...\] 或 \[Query = "select ..."\]。



## Category
Accessing data
