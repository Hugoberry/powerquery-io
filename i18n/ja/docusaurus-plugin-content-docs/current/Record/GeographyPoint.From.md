---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

パーツからの地理的ポイントを表すレコードを作成します。


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

経度、緯度、および (存在する場合は) 高さ (Z) とメジャー (M) などの構成パーツからの地理的ポイントを表すレコードを作成します。既定値 (4326) と異なる場合、オプションの空間参照系識別子 (SRID) を指定できます。



## Category
Record.Serialization
