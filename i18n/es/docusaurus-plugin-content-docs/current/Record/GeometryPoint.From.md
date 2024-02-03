---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Permite crear un registro que representa un punto geométrico a partir de distintos elementos.


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

Permite crear un registro que representa un punto geométrico a partir de sus distintas partes, como la coordenada X, la coordenada Y y, si están presentes, la coordenada Z y la medida (M). Se puede proporcionar un identificador de referencia espacial (SRID) opcional si no coincide con el valor predeterminado (0).



## Category
Record.Serialization
