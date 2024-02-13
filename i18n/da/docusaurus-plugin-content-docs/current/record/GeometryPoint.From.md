---
title: GeometryPoint.From
---

# GeometryPoint.From


Opretter en poststruktur, der repræsenterer et geometrisk punkt fra dele.


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

Opretter en post, der repræsenterer et geometrisk punkt fra dets bestanddele, såsom X-koordinat, Y-koordinat, og hvis den er til stede, Z-koordinat (Z) og måling (M). Der kan angives et valgfrit rumligt referencesystem-id (SRID), hvis det adskiller sig fra standardværdien (0).



## Category
Record.Serialization
