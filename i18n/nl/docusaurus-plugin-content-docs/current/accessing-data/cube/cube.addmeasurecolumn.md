---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Voegt een kolom toe aan de kubus die de resultaten bevat van de meting die is toegepast in de rijcontext van de rijen.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Voegt een kolom met de naam `column` toe aan de `cube` die de resultaten bevat van de meting `measureSelector` die is toegepast in de rijcontext van de rijen. De toepassing van de meting wordt beïnvloed door wijzigingen in de dimensiegranulatie en segmentering. Metingwaarden worden bijgesteld nadat bepaalde kubusbewerkingen zijn uitgevoerd.



## Category
Cube
