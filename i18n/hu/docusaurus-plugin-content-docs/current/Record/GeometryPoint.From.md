---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Létrehoz egy rekordot, amely egy alkotóelemekből álló geometriai pontot jelöl.


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

Létrehoz egy rekordot, amely egy alkotóelemekből – X koordináta, Y koordináta, illetve Z koordináta és mérték (M), ha van – álló geometriai pontot jelöl. Egy opcionális térbeli referenciaazonosító (SRID) is megadható, ha eltér az alapértelmezett értéktől (amely 0).



## Category
Record.Serialization
