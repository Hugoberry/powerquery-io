---
title: GeometryPoint.From
---

# GeometryPoint.From


Tworzy rekord reprezentujący punkt geometryczny z części.


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


## Remarks

Tworzy rekord reprezentujący punkt geometryczny z jego części składowych, takich jak współrzędna X, współrzędna Y, a jeśli występują, współrzędna Z i miara (M). Opcjonalny identyfikator odwołania przestrzennego (SRID) może zostać podany, jeśli jest inny niż wartość domyślna (0).



## Category
Record.Serialization
