---
title: Table.Profile
---

# Table.Profile


返回表中列的配置文件。


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Remarks

返回 `table` 中列的配置文件。

为每一列返回以下信息(如果适用):

-   最小值
-   最大值
-   平均值
-   标准偏差
-   计数
-   Null 计数
-   非重复计数



## Category
Table.Information
