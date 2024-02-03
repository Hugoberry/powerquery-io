---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

パーツからの幾何学的ポイントを表すレコードを作成します。


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

X 座標、Y 座標、および (ある場合は) Z 座標とメジャー (M) などの構成パーツからの幾何学的ポイントを表すレコードを作成します。既定値 (0) と異なる場合、オプションの空間参照系識別子 (SRID) を指定できます。



## Category
Record.Serialization
