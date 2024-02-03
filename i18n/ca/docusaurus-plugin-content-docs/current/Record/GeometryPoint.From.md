---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Crea un registre que representa un punt geomètric a partir de les parts.


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

Crea un registre que representa un punt geogràfic a partir de les seves parts constituents, com ara les coordenades X i Y i, si n'hi ha, la coordenada Z i la mesura (M). Es pot indicar un identificador de referència espacial (SRID) opcional si és diferent del valor per defecte (0).



## Category
Record.Serialization
