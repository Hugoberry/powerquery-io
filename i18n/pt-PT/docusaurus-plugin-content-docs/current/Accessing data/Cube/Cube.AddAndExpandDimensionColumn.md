---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Intercala a tabela de dimensão especificada com o contexto de filtro do cubo e altera a granularidade dimensional do contexto de filtro expandindo o conjunto especificado de atributos de dimensão.


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

Intercala a tabela de dimensão especificada, <code>dimensionSelector</code>, no contexto de filtro do cubo, <code>cube</code>, e altera a granularidade dimensional expandindo o conjunto de atributos de dimensão especificado, <code>attributeNames</code>. Os atributos de dimensão são adicionados à vista em tabela com colunas chamadas <code>newColumnNames</code> ou <code>attributeNames</code> se não for especificado.



## Category
Cube
