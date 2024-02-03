---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Crea un registre que representa un punt geogràfic a partir de les parts.


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

Crea un registre que representa un punt geogràfic a partir de les seves parts constituents, com ara la longitud, la latitud, i, si n'hi ha, l'elevació (Z) i la mesura (M). Es pot indicar un identificador de referència espacial (SRID) opcional si és diferent del valor per defecte (4326).



## Category
Record.Serialization
