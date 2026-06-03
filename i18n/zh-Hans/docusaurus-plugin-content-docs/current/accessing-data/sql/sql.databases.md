---
title: Sql.Databases
---

# Sql.Databases


返回 SQL Server 上的数据库表。


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

返回指定的 SQL Server `server` 上的数据库表。可以指定可选的记录参数 `options` 来控制以下选项:

-   `CreateNavigationProperties` : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。
-   `NavigationPropertyNameGenerator` : 一个函数，用于创建导航属性的名称。
-   `MaxDegreeOfParallelism` : 一个数字，用于设置生成的 SQL 查询中 "maxdop" 查询子句的值。
-   `CommandTimeout` : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。
-   `ConnectionTimeout` : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。
-   `HierarchicalNavigation` : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。
-   `MultiSubnetFailover` : 一个逻辑值(true/false)，用于设置连接字符串中 "MultiSubnetFailover" 属性的值(默认值为 false)。
-   `UnsafeTypeConversions` : 一个逻辑值(true/false)；如果为 true，则尝试折叠可能会失败并导致整个查询失败的类型转换。不建议用于常规用途。
-   `ContextInfo` : 一个二进制值，用于在运行每个命令之前设置 CONTEXT\_INFO。
-   `OmitSRID` : 一个逻辑值(true/false)；如果为 true，则在从几何图形和地理类型生成已知文本时省略 SRID。
-   `EnableCrossDatabaseFolding` : 一个逻辑 (true/false) 值，如果为 true，则允许查询折叠同一服务器上的数据库。默认值为 false。

例如，将记录参数指定为 \[option1 = value1, option2 = value2...\]。  
  
不支持将 SQL 查询设置为在服务器上运行。应改用 `Sql.Database` 来运行 SQL 查询。



## Category
Accessing data
