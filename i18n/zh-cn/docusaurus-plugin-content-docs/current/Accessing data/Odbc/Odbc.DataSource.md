---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

从 ODBC 数据源中返回 SQL 表和视图的表。


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

从连接字符串 <code>connectionString</code> 指定的 ODBC 数据源中返回 SQL 表和视图的表。<code>connectionString</code> 可以为文本或属性值对记录。属性值可以为文本或数字。可提供一个可选的记录参数 <code>options</code> 以指定其他属性。记录可以包含以下字段:    <ul><li><code>CreateNavigationProperties</code> : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 true)。</li><li><code>HierarchicalNavigation</code> : 一个逻辑值(true/false)，用于设置是否查看按架构名称分组的表(默认值为 false)。</li><li><code>ConnectionTimeout</code> : 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值为 15 秒。</li><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li><li><code>SqlCompatibleWindowsAuth</code> : 用于确认是否生成与 SQL Server 兼容的 Windows 身份验证连接字符串选项的逻辑(true/false)。默认值为 true。</li></ul>


## Examples

### Example #1 
从提供的连接字符串返回 SQL 表和视图。
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
