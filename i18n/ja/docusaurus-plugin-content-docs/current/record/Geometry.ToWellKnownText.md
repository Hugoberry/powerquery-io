---
title: Geometry.ToWellKnownText
---

# Geometry.ToWellKnownText


構造化された幾何学的ポイントの値を Well-Known Text (WKT) の表記に変換します。


## Syntax

```powerquery
Geometry.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Remarks

構造化された幾何学的ポイントの値を Open Geospatial Consortium (OGC) によって定義された Well-Known Text (WKT) の表記、また、SQL Server を含む多くのデータベースで使用されるシリアル化形式に変換します。



## Category
Record.Serialization
