---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Mencipta rekod yang mewakili titik geografi daripada bahagian.


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

Mencipta rekod yang mewakili titik geografi daripada bahagian unsurnya, seperti longitud, latitud dan jika ada, ketinggian (Z) dan ukuran (M). Pengecam rujukan ruang pilihan (SRID) boleh diberikan jika berbeza daripada nilai lalai (4326).



## Category
Record.Serialization
