---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

创建一条表示各部分的地理点的记录。


## Syntax

```powerquery
GeographyPoint.From(
    longitude as number,
    latitude as number,
    optional z as number,
    optional m as number,
    optional srid as number
) as record
```


## Details

创建一条表示其构成部分的地理点的记录，例如经度、维度以及(若有)海拔(Z)和度量值(M)。如果不同于默认值(4326)，可指定可选的空间参照标识符(SRID)。



## Category
Record.Serialization
