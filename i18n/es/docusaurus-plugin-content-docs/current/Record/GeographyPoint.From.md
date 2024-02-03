---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Permite crear un registro que representa un punto geográfico a partir de distintos elementos.


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

Permite crear un registro que representa un punto geográfico a partir de sus distintas partes, como la longitud, la latitud y, si están presentes, la elevación (Z) y la medida (M). Se puede proporcionar un identificador de referencia espacial (SRID) opcional si no coincide con el valor predeterminado (4326).



## Category
Record.Serialization
