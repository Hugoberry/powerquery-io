---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Į kubą įtraukiamas stulpelis, kuriame yra mato, taikyto kiekvienos eilutės kontekste, rezultatai.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Į <code>cube</code> įtraukiamas stulpelis pavadinimu <code>column</code>, kuriame yra mato <code>measureSelector</code>, taikyto kiekvienos eilutės kontekste, rezultatai. Mato taikymui įtakos turi dimensijų detalumo lygio ir dalių keitimas. Mato vertės bus pakoreguotos atlikus tam tikras kubo operacijas.



## Category
Cube
