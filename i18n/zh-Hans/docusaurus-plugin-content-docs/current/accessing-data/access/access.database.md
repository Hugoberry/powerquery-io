---
title: Access.Database
---

# Access.Database


返回 Access 数据库的结构表示形式。


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

返回 Access 数据库 `database` 的结构表示形式。可以指定可选的记录参数 `options` 来控制以下选项:

-   `CreateNavigationProperties` : 一个逻辑值(true/false)，用于在返回的值上设置是否生成导航属性(默认值为 false)。
-   `NavigationPropertyNameGenerator` : 一个函数，用于创建导航属性的名称。

例如，可以将记录参数指定为 \[option1 = value1, option2 = value2...\]。



## Category
Accessing data
