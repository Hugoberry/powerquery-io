---
title: GeographyPoint.From
---

# GeographyPoint.From


Parçalardan coğrafi noktayı temsil eden bir kayıt oluşturur.


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

Boylam, enlem ve varsa yükseklik (Z) ve ölçü (M) gibi bileşen parçalarından coğrafi noktayı temsil eden bir kayıt oluşturur. Varsayılan değerden (4326) farklı olduğunda isteğe bağlı bir uzamsal başvuru tanımlayıcısı (SRID) verilebilir.



## Category
Record.Serialization
