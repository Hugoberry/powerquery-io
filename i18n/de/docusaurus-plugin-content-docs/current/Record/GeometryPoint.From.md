---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Hiermit wird ein Datensatz erstellt, der einen geometrischen Punkt anhand seiner Bestandteile darstellt.


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

Hiermit wird ein Datensatz erstellt, der einen geometrischen Punkt anhand seiner Bestandteile darstellt, z. B. X-Koordinate, Y-Koordinate und – sofern vorhanden – Z-Koordinate (Z) und Maßeinheit (M). Anstelle des Standardwerts (0) kann eine optionale Raumbezugskennung (SRID) angegeben werden.



## Category
Record.Serialization
