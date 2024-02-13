---
title: GeometryPoint.From
---

# GeometryPoint.From


Crée un enregistrement représentant un point géométrique à partir des parties constituantes.


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

Crée un enregistrement représentant un point géographique à partir de ses parties constituantes, telles que les coordonnées X et Y et, le cas échéant, les coordonnées (Z) et la mesure (M). Un ID de référence spatial (SRID) facultatif peut être fourni s’il est différent de la valeur par défaut (0).



## Category
Record.Serialization
