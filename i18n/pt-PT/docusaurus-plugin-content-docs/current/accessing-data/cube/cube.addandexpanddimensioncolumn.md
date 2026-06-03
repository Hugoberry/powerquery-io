---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Intercala a tabela de dimensões especificada no contexto de filtro do cubo e altera a granularidade dimensional do contexto de filtro ao expandir o conjunto especificado de atributos de dimensão.


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

Intercala a tabela de dimensões especificada, `dimensionSelector`, no contexto de filtro do `cube` e altera a granularidade dimensional ao expandir o conjunto especificado, `attributeNames`, de atributos de dimensão. Os atributos de dimensão são adicionados à vista tabular com colunas denominadas `newColumnNames` ou `attributeNames`, se não especificado.



## Category
Cube
