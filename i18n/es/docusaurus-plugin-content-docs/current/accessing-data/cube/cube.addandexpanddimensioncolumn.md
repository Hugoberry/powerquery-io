---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Combina la tabla de dimensiones especificada en el contexto de filtro del cubo y cambia la granularidad dimensional del contexto de filtro expandiendo el conjunto de atributos de dimensión especificado.


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

Combina la tabla de dimensiones especificada, `dimensionSelector`, en el contexto de filtro del `cube` y cambia la granularidad dimensional expandiendo el conjunto especificado, `attributeNames`, de los atributos de dimensión. Los atributos de dimensión se agregan a la vista tabular con las columnas con nombre `newColumnNames`, o `attributeNames` si no se especificada nada.



## Category
Cube
