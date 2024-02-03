---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Ustvari zapis, ki predstavlja geometrično točko iz delov.


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

Ustvari zapis, ki predstavlja geografsko točko iz njegovih sestavnih delov, kot so koordinata X, koordinata Y ter koordinata (Z) in mera (M), če sta prisotni. Izbirni prostorski referenčni identifikator (SRID) je mogoče navesti, če se razlikuje od privzete vrednosti (0).



## Category
Record.Serialization
