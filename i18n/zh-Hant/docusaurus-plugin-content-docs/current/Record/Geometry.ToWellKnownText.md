---
title: Geometry.ToWellKnownText
---

# Geometry.ToWellKnownText


將結構化幾何點的值轉譯成其 Well-Known Text (WKT) 表示法。


## Syntax

```powerquery
Geometry.ToWellKnownText(
    input as record,
    optional omitSRID as logical
) as text
```


## Remarks

將結構化幾何點的值轉譯成開放地理空間協會 (OGC) 所定義的 Well-Known Text (WKT) 表示法，這也是眾多資料庫 (包括 SQL Server 在內) 使用的序列化格式。



## Category
Record.Serialization
