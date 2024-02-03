---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Skapar en post som motsvarar en geometrisk punkt utifrån delar.


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

Skapar en post som motsvarar en geometrisk punkt utifrån dess beståndsdelar som X-koordinat, Y-koordinat och om det finns, Z-koordinat och mått (M). En valfri spatial referensidentifierare (SRID) kan anges om värdet är något annat än standardvärdet (0).



## Category
Record.Serialization
