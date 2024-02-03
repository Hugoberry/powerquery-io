---
title: Teradata.Database
---

# Teradata.Database


## Description

从 Teradata 数据库中返回 SQL 表和视图的表。


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Details

从服务器 <code>server</code> 上的 Teradata 数据库返回 SQL 表和视图的表。可以视需要指定服务器的端口，并用冒号分隔。可以指定可选的记录参数 <code>options</code> 来控制以下选项:    <ul><li><code>CreateNavigationProperties</code> : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。</li><li><code>NavigationPropertyNameGenerator</code> : 一个函数，用于创建导航属性的名称。</li><li><code>Query</code> : 用于检索数据的本机 SQL 查询。如果查询生成多个结果集，则仅返回第一个结果集。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li><li><code>HierarchicalNavigation</code> : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。</li></ul>    例如，可以将记录参数指定为 [option1 = value1, option2 = value2...] 或 [Query = "select ..."]。    



## Category
Accessing data
