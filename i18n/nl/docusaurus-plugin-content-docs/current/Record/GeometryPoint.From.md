---
title: GeometryPoint.From
---

# GeometryPoint.From


Hiermee wordt een record gemaakt die een geometrisch punt op basis van onderdelen aangeeft.


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

Hiermee wordt een record gemaakt die een geometrisch punt aangeeft op basis van de samenstellende onderdelen, zoals X-coördinaat, Y-coördinaat en, indien aanwezig, Z-coördinaat en meting (M). Er kan een optionele ruimtelijke referentie-id (SRID) worden opgegeven als deze afwijkt van de standaardwaarde (0).



## Category
Record.Serialization
