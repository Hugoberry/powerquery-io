---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Adiciona uma coluna ao cubo que contém o resultado da medida aplicada no contexto de linha de cada linha.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Adiciona uma coluna com o nome <code>column</code> ao <code>cube</code> que contém o resultado da medida <code>measureSelector</code> aplicada no contexto de linha de cada linha. A aplicação da medida é afetada por alterações à granularidade dimensional e à segmentação de dados. Os valores da medida serão ajustados após a execução de operações de cubo específicas.



## Category
Cube
