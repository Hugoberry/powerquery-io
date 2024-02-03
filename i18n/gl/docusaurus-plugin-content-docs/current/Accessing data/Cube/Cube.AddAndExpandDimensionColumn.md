---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Combina a táboa de dimensións especificada no contexto de filtro do cubo e cambia a granularidade dimensional do contexto de filtro mediante a expansión do conxunto especificado de atributos de dimensión.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Combina a táboa de dimensións especificada (<code>dimensionSelector</code>) no contexto de filtro do cubo (<code>cube</code>) e cambia a granularidade dimensional do contexto de filtro mediante a expansión do conxunto especificado (<code>attributeNames</code>) de atributos de dimensión. Os atributos de dimensión engádense á vista tabular con columnas denominadas <code>newColumnNames</code>, ou <code>attributeNames</code> se non se especifica.



## Category
Cube
