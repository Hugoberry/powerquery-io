---
title: Table.Profile
---

# Table.Profile


## Description

返回表中列的配置文件。


## Syntax

```powerquery
Table.Profile(
    table as table,
    optional additionalAggregates as list
) as table
```


## Details

返回 <code>table</code> 中列的配置文件。<br />为每一列返回以下信息(如果适用):<ul>  <li>最小值</li>  <li>最大值</li>  <li>平均值</li>  <li>标准偏差</li>  <li>计数</li>  <li>Null 计数</li>  <li>非重复计数</li></ul><br />



## Category
Table.Information
