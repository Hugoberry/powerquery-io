---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Ajoute une colonne au cube qui contient les résultats de la mesure appliquée au contexte de ligne de chaque ligne.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Ajoute une colonne portant le nom <code>column</code> au <code>cube</code> qui contient les résultats de la mesure <code>measureSelector</code> appliquée au contexte de ligne de chaque ligne. L'application de mesure est affectée par les modifications apportées à la granularité et au découpage des dimensions. Les valeurs de mesure seront ajustées après l'exécution de certaines opérations sur le cube.



## Category
Cube
