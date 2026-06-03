---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Mescla a tabela de dimensões especificada no contexto de filtro do cubo e altera a granularidade dimensional do contexto de filtro expandindo o conjunto especificado de atributos de dimensão.


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

Mescla a tabela de dimensões especificada, `dimensionSelector`, no contexto de filtro do `cube` e altera a granularidade dimensional expandindo o conjunto especificado, `attributeNames`, de atributos de dimensão. Os atributos de dimensão são adicionados à exibição tabular com as colunas `newColumnNames`, ou `attributeNames` se não forem especificados.



## Category
Cube
