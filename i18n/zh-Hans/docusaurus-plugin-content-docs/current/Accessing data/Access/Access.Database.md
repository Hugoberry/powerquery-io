---
title: Access.Database
---

# Access.Database


## Description

返回 Access 数据库的结构表示形式。


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

返回 Access 数据库 <code>database</code> 的结构表示形式。可以指定可选的记录参数 <code>options</code> 来控制以下选项:    <ul><li><code>CreateNavigationProperties</code> : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 false)。</li><li><code>NavigationPropertyNameGenerator</code> : 一个函数，用于创建导航属性的名称。</li></ul>    例如，可以将记录参数指定为 [option1 = value1, option2 = value2...]。



## Category
Accessing data
