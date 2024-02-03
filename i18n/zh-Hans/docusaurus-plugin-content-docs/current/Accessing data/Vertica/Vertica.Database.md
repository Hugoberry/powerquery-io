---
title: Vertica.Database
---

# Vertica.Database


## Description

从 Vertica 导入数据


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

返回 <code>server</code> 参数命名的服务器(位于 <code>database</code> 参数命名的数据库中)上的可用架构表。可提供一个可选记录参数 <code>options</code> 来指定其他属性。记录可以包含以下字段:<ul>    <li><code>ConnectionTimeout</code>: 一个时间段，控制在放弃尝试建立到服务器的连接之前等待的时间。默认值与驱动程序相关。</li>    <li><code>CommandTimeout</code>: 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值与驱动程序相关。</li></ul>


## Examples

### Example #1 
列出 Vertica 中的表
```powerquery

```



