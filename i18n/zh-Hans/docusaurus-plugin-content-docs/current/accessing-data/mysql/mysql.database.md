---
title: MySQL.Database
---

# MySQL.Database


返回 MySQL 数据库中可用的 SQL 表、视图和存储标量函数的表。


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

返回服务器 `server` 上 MySQL 数据库(在名为 `database` 的数据库实例中)中可用的 SQL 表、视图和存储标量函数的表。可以视需要指定服务器的端口，并用冒号分隔。可以指定可选的记录参数 `options` 来控制以下选项:

-   `Encoding` : 指定用于对发送到服务器的所有查询进行编码的字符集的 TextEncoding 值(默认值为 null)。
-   `CreateNavigationProperties` : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。
-   `NavigationPropertyNameGenerator` : 一个函数，用于创建导航属性的名称。
-   `Query` : 用于检索数据的本机 SQL 查询。如果查询生成多个结果集，则仅返回第一个结果集。
-   `CommandTimeout` : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。
-   `ConnectionTimeout` : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。
-   `TreatTinyAsBoolean` : 一个逻辑值(true/false)，用于确定是否将服务器上的 tinyint 列强制设置为逻辑值。默认值为 true。
-   `OldGuids` : 一个逻辑值(true/false)，用于设置将 char(36)列(如果为 false)还是 binary(16)列(如果为 true)视为 GUID。默认值为 false。
-   `ReturnSingleDatabase` : 一个逻辑值(true/false)，用于设置是返回所有数据库的所有表(如果为 false)，还是返回指定数据库的表和视图(如果为 true)。默认值为 false。
-   `HierarchicalNavigation` : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。

例如，可以将记录参数指定为 \[option1 = value1, option2 = value2...\] 或 \[Query = "select ..."\]。



## Category
Accessing data
