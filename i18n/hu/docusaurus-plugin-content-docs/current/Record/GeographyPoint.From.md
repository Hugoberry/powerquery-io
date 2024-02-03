---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Létrehoz egy rekordot, amely egy alkotóelemekből álló földrajzi pontot jelöl.


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

Létrehoz egy rekordot, amely egy alkotóelemekből – hosszúság, szélesség, illetve tengerszint feletti magasság (Z) és mérték (M), ha van – álló földrajzi pontot jelöl. Egy opcionális térbeli referenciaazonosító (SRID) is megadható, ha eltér az alapértelmezett értéktől (amely 4326).



## Category
Record.Serialization
