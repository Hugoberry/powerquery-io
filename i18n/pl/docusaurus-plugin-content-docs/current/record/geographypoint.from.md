---
title: GeographyPoint.From
---

# GeographyPoint.From


Tworzy rekord reprezentujący punkt geograficzny z części.


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


## Remarks

Tworzy rekord reprezentujący punkt geograficzny z jego części składowych, takich jak długość geograficzna, szerokość geograficzna, a jeśli występują, wysokość nad poziomem morza (Z) i miara (M). Opcjonalny identyfikator odwołania przestrzennego (SRID) może zostać podany, jeśli jest inny niż wartość domyślna (4326).



## Category
Record.Serialization
