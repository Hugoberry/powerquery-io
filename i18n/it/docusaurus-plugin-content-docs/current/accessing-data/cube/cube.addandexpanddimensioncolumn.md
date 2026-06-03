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

Esegue il merge della tabella di dimensioni specificata, `dimensionSelector`, nel contesto del filtro di `cube` e modifica la granularità dimensionale espandendo il set specificato, `attributeNames`, di attributi di dimensione. Gli attributi di dimensione vengono aggiunti alla visualizzazione tabulare con le colonne denominate `newColumnNames` o `attributeNames`, se non specificate.



## Category
Cube
