---
title: GeographyPoint.From
---

# GeographyPoint.From


Crea un record che rappresenta un punto geografico dalle parti.


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

Crea un record che rappresenta un punto geografico dalle relative parti costituenti, come longitudine, latitudine e, se presenti, elevazione (Z) e misura (M). È possibile specificare un identificatore di riferimento spaziale (SRID) facoltativo, se diverso dal valore predefinito (4326).



## Category
Record.Serialization
