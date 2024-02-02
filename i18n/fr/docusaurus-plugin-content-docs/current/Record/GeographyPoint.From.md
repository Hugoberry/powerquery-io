---
title: GeographyPoint.From
---

# GeographyPoint.From


## Description

Crée un enregistrement représentant un point géographique à partir des parties constituantes.


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

Crée un enregistrement représentant un point géographique à partir de ses parties constituantes, telles que la longitude, la latitude et, le cas échéant, l’élévation (Z) et la mesure (M). Un ID de référence spatial (SRID) facultatif peut être fourni s’il est différent de la valeur par défaut (4326).



## Category
Record.Serialization
