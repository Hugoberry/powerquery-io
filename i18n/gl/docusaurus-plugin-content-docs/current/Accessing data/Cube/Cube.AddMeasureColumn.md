---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Engade unha columna ao cubo que contén os resultados da medida aplicada no contexto de cada fila.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Engade unha columna co nome <code>column</code> ao <code>cube</code> que contén os resultados da medida <code>measureSelector</code> aplicada no contexto de cada fila. A aplicación de medida vese afectada por cambios nas porcións e granularidade da dimensión. Os valores de medida axustaranse despois de que se realicen determinadas operacións de cubo.



## Category
Cube
