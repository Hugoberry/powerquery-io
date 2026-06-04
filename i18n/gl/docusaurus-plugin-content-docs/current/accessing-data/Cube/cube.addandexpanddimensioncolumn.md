---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Combina a táboa de dimensións especificada co contexto de filtro do cubo e modifica a granularidade dimensional do contexto de filtro expandindo o conxunto especificado de atributos de dimensión.


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

Fusiona a táboa de dimensións especificada, `dimensionSelector`, no contexto de filtro de `cube` e cambia a granularidade dimensional expandindo o conxunto especificado, `attributeNames`, de atributos de dimensión. Os atributos de dimensión engádense á vista tabular con columnas chamadas `newColumnNames` ou `attributeNames` se non se especifican.



## Category
Cube
