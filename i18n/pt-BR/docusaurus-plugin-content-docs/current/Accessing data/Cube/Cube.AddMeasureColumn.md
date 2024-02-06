---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Adiciona uma coluna ao cubo que contém os resultados da medida aplicada ao contexto de cada linha.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Adiciona uma coluna com o nome <code>column</code> ao <code>cube</code> que contém os resultados da medida <code>measureSelector</code> aplicada ao contexto de cada linha. A aplicação de medida é afetada por alterações feitas na granularidade da dimensão e na divisão. Os valores de medida serão ajustados após determinadas operações de cubo serem executadas.



## Category
Cube
