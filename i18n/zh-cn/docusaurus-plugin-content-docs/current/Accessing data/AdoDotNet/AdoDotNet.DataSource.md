---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

返回 ADO.NET 数据源的架构集合。


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

使用提供程序名称 <code>providerName</code> 和连接字符串 <code>connectionString</code> 返回 ADO.NET 数据源的架构集合。<code>connectionString</code> 可以是文本或属性值对的记录。属性值可以是文本或数字。可提供一个可选的记录参数 <code>options</code> 以指定其他属性。记录可以包含以下字段:    <ul><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li><li><code>SqlCompatibleWindowsAuth</code> : 用于确认是否生成与 SQL Server 兼容的 Windows 身份验证连接字符串选项的逻辑(true/false)。默认值为 true。</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
