---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Pravi zapis koji predstavlјa geografsku tačku od delova.


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

Pravi zapis koji predstavlјa geografsku tačku od sastavnih delova, kao što su geografska dužina, geografska širina i, ako su prisutni, nagib (Z) i mera (M). Opcionalni identifikator prostornog referentnog sistema (SRID) može se navesti ako se razlikuje od podrazumevane vrednosti (4326).



## Category
Record.Serialization
