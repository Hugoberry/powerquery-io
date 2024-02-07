---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Mescla a tabela de dimensão especificada no contexto de filtro do cubo e altera a granularidade dimensional do contexto do filtro, expandindo o conjunto especificado de atributos de dimensão.


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

Mescla a tabela de dimensão especificada <code>dimensionSelector</code> no contexto de filtro <code>cube</code> do cubo e altera a granularidade dimensional do contexto de filtro, expandindo o conjunto especificado <code>attributeNames</code> de atributos de dimensão. Os atributos de dimensão são adicionados à exibição tabular com as colunas <code>newColumnNames</code>, ou <code>attributeNames</code> se não forem especificados.



## Category
Cube
