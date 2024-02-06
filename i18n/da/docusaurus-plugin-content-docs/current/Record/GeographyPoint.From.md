---
title: GeographyPoint.From
---

# GeographyPoint.From


Opretter en post, der repræsenterer et geografisk punkt fra dele.


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

Opretter en poststruktur, der repræsenterer et geografisk punkt fra dets bestanddele, såsom længdegrad, breddegrad, og hvis den er til stede, elevation (Z) og måling (M). Der kan angives et valgfrit rumligt referencesystem-id (SRID), hvis det adskiller sig fra standardværdien (4326).



## Category
Record.Serialization
