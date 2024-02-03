---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Pravi zapis koji predstavlja geometrijsku tačku od delova.


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

Pravi zapis koji predstavlјa geometrijsku tačku od sastavnih delova, kao što su X-koordinata, Y-koordinata i, ako su prisutni, Z-koordinata i mera (M). Opcionalni identifikator prostornog referentnog sistema (SRID) može se navesti ako se razlikuje od podrazumevane vrednosti (0).



## Category
Record.Serialization
