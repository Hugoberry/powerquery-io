---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Adiciona uma coluna ao cubo que contém o resultado da medida aplicada no contexto de linha de cada linha.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Adiciona uma coluna com o nome `column` ao `cube` que contém o resultado da medida `measureSelector` aplicada no contexto de linha de cada linha. A aplicação da medida é afetada por alterações à granularidade dimensional e à segmentação de dados. Os valores da medida serão ajustados após a execução de operações de cubo específicas.



## Category
Cube
