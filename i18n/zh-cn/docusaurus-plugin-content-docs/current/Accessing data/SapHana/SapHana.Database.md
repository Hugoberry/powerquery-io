---
title: SapHana.Database
---

# SapHana.Database


## Description

返回 SAP HANA 数据库中的包。


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

从 SAP HANA 数据库 <code>server</code> 返回多维包的表。可以指定可选的记录参数 <code>options</code> 来控制以下选项:    <ul><li><code>Query</code> : 用于检索数据的本机 SQL 查询。如果查询生成多个结果集，则仅返回第一个结果集。</li><li><code>Distribution</code> : 连接字符串中设置“分发”属性值的 SapHanaDistribution。语句路由是在语句执行前计算分布式系统的正确服务器节点的方法。默认值为 SapHanaDistribution.All。</li><li><code>Implementation</code> : 指定要使用的 SAP HANA 连接器实现。</li><li><code>EnableColumnBinding</code> : 提取数据时，将变量绑定到 SAP HANA 结果集的列。可能会以略高的内存利用率为代价提高性能。默认值为 false。</li><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值为 15 秒。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li></ul>    



## Category
Accessing data
