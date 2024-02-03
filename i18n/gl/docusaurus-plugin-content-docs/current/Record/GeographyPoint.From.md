---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Crea un rexistro que representa un punto xeográfico a partir das partes.


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

Crea un rexistro que representa un punto xeográfico a partir das súas partes constituíntes, como a lonxitude, a latitude e, se están presentes, a elevación (Z) e a medida (A). Pode indicarse un identificador de referencia espacial (SRID) opcional se é diferente do valor predefinido (4326).



## Category
Record.Serialization
