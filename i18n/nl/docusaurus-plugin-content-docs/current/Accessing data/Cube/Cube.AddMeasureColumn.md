---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Voegt een kolom toe aan de kubus die de resultaten bevat van de meting die is toegepast in de rijcontext van de rijen.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Voegt een kolom met de naam <code>column</code> toe aan de <code>cube</code> die de resultaten bevat van de meting <code>measureSelector</code> die is toegepast in de rijcontext van de rijen. De toepassing van de meting wordt beïnvloed door wijzigingen in de dimensiegranulatie en segmentering. Metingwaarden worden bijgesteld nadat bepaalde kubusbewerkingen zijn uitgevoerd.



## Category
Cube
