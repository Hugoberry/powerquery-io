---
title: OleDb.Query
---

# OleDb.Query


## Description

返回在 OLE DB 数据源上运行本机查询的结果。


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

返回通过使用 OLE DB 的连接字符串 <code>connectionString</code> 运行 <code>query</code> 的结果。<code>connectionString</code> 可以是文本或属性值对的记录。属性值可以是文本或数字。可提供一个可选的记录参数 <code>options</code> 来指定其他属性。记录可以包含以下字段:    <ul><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li><li><code>SqlCompatibleWindowsAuth</code> : 用于确认是否生成与 SQL Server 兼容的 Windows 身份验证连接字符串选项的逻辑(true/false)。默认值为 true。</li></ul>



## Category
Accessing data
