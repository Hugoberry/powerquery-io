---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Crea un rexistro que representa un punto xeométrico a partir das partes.


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

Crea un rexistro que representa un punto xeográfico a partir das súas partes constituíntes, como a coordenada X, a coordenada Y e, se están presentes, a coordenada Z e a medida (M). Pode indicarse un identificador de referencia espacial (SRID) se é diferente do valor predefinido (0).



## Category
Record.Serialization
