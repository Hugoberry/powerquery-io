---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Parçalardan geometrik noktayı temsil eden bir kayıt oluşturur.


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

X koordinatı, Y koordinatı, varsa Z koordinatı ve ölçü (M) gibi bileşen parçalarından geometrik noktayı temsil eden bir kayıt oluşturur. Varsayılan değerden (0) farklı olduğunda isteğe bağlı bir uzamsal başvuru tanımlayıcısı (SRID) verilebilir.



## Category
Record.Serialization
