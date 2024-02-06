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

返回指定 SQL Server <code>server</code> 上的数据库表。可以指定可选的记录参数 <code>options</code> 来控制以下选项:    <ul><li><code>CreateNavigationProperties</code> : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。</li><li><code>NavigationPropertyNameGenerator</code> : 一个函数，用于创建导航属性的名称。</li><li><code>MaxDegreeOfParallelism</code> : 一个数字，用于设置生成的 SQL 查询中 &quot;maxdop&quot; 查询子句的值。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li><li><code>HierarchicalNavigation</code> : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。</li><li><code>MultiSubnetFailover</code> : 一个逻辑值(true/false)，用于设置连接字符串中 &quot;MultiSubnetFailover&quot; 属性的值(默认值为 false)。</li><li><code>UnsafeTypeConversions</code> : 一个逻辑值(true/false)；如果为 true，则尝试折叠可能会失败并导致整个查询失败的类型转换。不建议用于常规用途。</li><li><code>ContextInfo</code> : 一个二进制值，用于在运行每个命令之前设置 CONTEXT_INFO。</li><li><code>OmitSRID</code> : 一个逻辑值(true/false)；如果为 true，则在从几何图形和地理类型生成已知文本时省略 SRID。</li><li><code>EnableCrossDatabaseFolding</code> : 一个逻辑 (true/false) 值，如果为 true，则允许查询折叠同一服务器上的数据库。默认值为 false。</li></ul>    例如，将记录参数指定为 [option1 = value1, option2 = value2...]。    <br />    不支持将 SQL 查询设置为在服务器上运行。应改用 <code>Sql.Database</code> 来运行 SQL 查询。    



## Category
Accessing data
