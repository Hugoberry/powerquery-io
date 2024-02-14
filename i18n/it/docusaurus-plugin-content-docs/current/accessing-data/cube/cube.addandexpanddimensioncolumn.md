---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Esegue il merge della tabella di dimensioni specificata nel contesto del filtro del cubo e modifica la granularità dimensionale del contesto del filtro espandendo il set specificato di attributi di dimensione.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Esegue il merge della tabella di dimensioni specificata <code>dimensionSelector</code> nel contesto del filtro <code>cube</code> del cubo e modifica la granularità dimensionale del contesto del filtro espandendo il set specificato <code>attributeNames</code> di attributi di dimensione. Gli attributi di dimensione vengono aggiunti alla visualizzazione tabulare con le colonne denominate <code>newColumnNames</code> o <code>attributeNames</code> se non specificate.



## Category
Cube
