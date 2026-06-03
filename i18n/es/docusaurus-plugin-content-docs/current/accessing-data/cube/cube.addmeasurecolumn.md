---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Agrega una columna al cubo que contiene los resultados de la medida aplicada al contexto de fila de cada fila.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Agrega una columna con el nombre `column` al `cube` que contiene los resultados de la medida `measureSelector` aplicada al contexto de fila de cada fila. La aplicación de medidas se ve afectada por los cambios en la granularidad y la segmentación de dimensiones. Los valores de medida se ajustarán después de realizar ciertas operaciones con cubos.



## Category
Cube
