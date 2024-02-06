---
title: GeometryPoint.From
---

# GeometryPoint.From


從組件建立代表幾何點的記錄。


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


## Remarks

從幾何點的構成組件建立代表該點的記錄，例如 X 座標、Y 座標，及 Z 座標和量值 (M) (若有的話)。若與預設值 (0) 不同，則可以指定選擇性空間參考識別碼 (SRID)。



## Category
Record.Serialization
