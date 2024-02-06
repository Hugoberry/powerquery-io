---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Combina la tabla de dimensiones especificada en el contexto de filtro del cubo y cambia la granularidad de dimensión del contexto de filtro expandiendo el conjunto especificado de atributos de dimensión.


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

Combina la tabla de dimensiones especificada, <code>dimensionSelector</code>, en el contexto de filtro del cubo, <code>cube</code>, y cambia la granularidad de dimensión expandiendo el conjunto especificado <code>attributeNames</code> de atributos de dimensión. Los atributos de dimensión se agregan a la vista tabular con las columnas con nombre <code>newColumnNames</code>, o <code>attributeNames</code> si no se especificada nada.



## Category
Cube
