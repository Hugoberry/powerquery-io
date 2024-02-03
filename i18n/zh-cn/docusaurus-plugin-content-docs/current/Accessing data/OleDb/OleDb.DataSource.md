---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

返回 SQL 表的表并从 OLE DB 数据源进行查看。


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

返回 SQL 表的表并从连接字符串 <code>connectionString</code> 指定的 OLE DB 数据源进行查看。<code>connectionString</code> 可以是文本或属性值对的记录。属性值可以是文本或数字。可以提供一个可选的记录参数 <code>options</code> 来指定其他属性。记录可以包含以下字段:    <ul><li><code>CreateNavigationProperties</code> : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。</li><li><code>NavigationPropertyNameGenerator</code> : 一个函数，用于创建导航属性的名称。</li><li><code>Query</code> : 用于检索数据的本机 SQL 查询。如果查询生成多个结果集，则仅返回第一个结果集。</li><li><code>HierarchicalNavigation</code> : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 true)。</li><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li><li><code>SqlCompatibleWindowsAuth</code> : 用于确认是否生成与 SQL Server 兼容的 Windows 身份验证连接字符串选项的逻辑(true/false)。默认值为 true。</li></ul>    例如，将记录参数指定为 [option1 = value1, option2 = value2...] 或 [Query = "select ..."]。



## Category
Accessing data
