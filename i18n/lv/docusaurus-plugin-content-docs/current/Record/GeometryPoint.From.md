---
title: GeometryPoint.From
---

# GeometryPoint.From


## Description

Izveido ierakstu, kas no daļām atveido ģeometrisku punktu.


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

Izveido ierakstu, kas atveido ģeogrāfisku punktu no tā sastāvdaļām, piemēram, koordinātas X, koordinātas Y, un, ja ir, koordinātas Z un mēra (M). Var norādīt papildu teritoriālās atskaites identifikatoru (SRID), ja tas atšķiras no noklusējuma vērtības (0).



## Category
Record.Serialization
