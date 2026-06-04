---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Afegeix una columna al cub que conté el resultat de la mesura aplicada al context de fila de cada fila.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Afegeix una columna denominada `column` al `cube` que conté el resultat de la mesura `measureSelector` aplicada al context de fila de cada fila. L'aplicació de la mesura està afectada pels canvis en la segmentació i la granularitat de les dimensions. Els valors de mesura s'ajustaran després de realitzar determinades operacions del cub.



## Category
Cube
