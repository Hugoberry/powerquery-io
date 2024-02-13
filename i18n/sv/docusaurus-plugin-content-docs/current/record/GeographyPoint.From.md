---
title: GeographyPoint.From
---

# GeographyPoint.From


Skapar en post som motsvarar en geografisk punkt utifrån delar.


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

Skapar en post som motsvarar en geografisk punkt utifrån dess beståndsdelar som longitud, latitud och, om det finns, höjd (Z) och mått (M). En valfri spatial referensidentifierare (SRID) kan anges om värdet är något annat än standardvärdet (4326).



## Category
Record.Serialization
