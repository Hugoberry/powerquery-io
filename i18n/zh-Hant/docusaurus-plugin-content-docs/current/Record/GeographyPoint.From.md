---
title: GeographyPoint.From
---

# GeographyPoint.From


從組件建立代表地理點的記錄。


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


## Remarks

從地理點的構成組件建立代表該點的記錄，例如經度、緯度，及高度 (Z) 和量值 (M) (若有的話)。若與預設值 (4326) 不同，則可以指定選擇性空間參考識別碼 (SRID)。



## Category
Record.Serialization
