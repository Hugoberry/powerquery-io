---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

创建一条表示各部分的几何点的记录。


## Syntax

```powerquery
GeometryPoint.From(
    x as number,
    y as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

创建一条表示其构成部分的几何点的记录，例如 X 轴、Y 轴以及(若有) Z 轴度量值(M)。如果不同于默认值(0)，可指定可选的空间参照标识符(SRID)。



## Category
Record.Serialization
