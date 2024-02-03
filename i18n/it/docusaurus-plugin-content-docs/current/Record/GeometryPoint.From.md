---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Crea un record che rappresenta un punto geometrico dalle parti.


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

Crea un record che rappresenta un punto geometrico dalle relative parti costituenti, come coordinata X, coordinata Y e, se presenti, coordinata Z e misura (M). È possibile specificare un identificatore di riferimento spaziale (SRID) facoltativo, se diverso dal valore predefinito (0).



## Category
Record.Serialization
