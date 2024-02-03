---
title: Essbase.Cubes
---

# Essbase.Cubes


## Description

返回 Essbase 实例中按 Essbase 服务器分组的多维数据集。


## Syntax

```powerquery
Essbase.Cubes(
    url as text,
    optional options as record
) as table
```


## Details

从 APS 服务器 <code>url</code> 处的 Essbase 实例中返回按 Essbase 服务器分组的多维数据集表。可以指定可选的记录参数 <code>options</code>，从而控制以下选项:    <ul><li><code>CommandTimeout</code> : 一个时间段，控制在取消服务器端查询之前允许该查询运行的时间。默认值为 10 分钟。</li></ul>



## Category
Accessing data
