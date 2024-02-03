---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Membuat catatan yang mewakili titik geografis dari bagian-bagian.


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

Membuat catatan yang mewakili titik geografis dari bagian penyusunnya, seperti garis bujur, garis lintang, dan jika ada, elevasi (Z) dan pengukuran (M). Pengidentifikasi referensi spasial (SRID) opsional dapat diberikan jika berbeda dengan nilai default (4326).



## Category
Record.Serialization
