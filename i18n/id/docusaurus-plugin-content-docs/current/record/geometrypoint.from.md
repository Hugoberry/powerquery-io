---
title: GeometryPoint.From
---

# GeometryPoint.From


Membuat catatan yang mewakili titik geometris dari bagian-bagian.


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

Membuat catatan yang mewakili titik geometris dari bagian penyusunnya, seperti koordinat X, koordinat Y, dan jika ada, koordinat Z dan pengukuran (M). Pengidentifikasi referensi spasial (SRID) opsional dapat diberikan jika berbeda dengan nilai default (0).



## Category
Record.Serialization
