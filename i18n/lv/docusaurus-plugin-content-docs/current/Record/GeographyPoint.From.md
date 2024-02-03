---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Izveido ierakstu, kas no daļām atveido ģeogrāfisku punktu.


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

Izveido ierakstu, kas atveido ģeogrāfisku punktu no tā sastāvdaļām, piemēram, platuma, garuma, un, ja ir, augstuma (Z) un mēra (M). Var norādīt papildu teritoriālās atskaites identifikatoru (SRID), ja tas atšķiras no noklusējuma vērtības (4326).



## Category
Record.Serialization
