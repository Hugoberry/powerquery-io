---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Į kubą įtraukiamas stulpelis, kuriame yra mato, taikyto kiekvienos eilutės kontekste, rezultatai.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Į `cube` įtraukiamas stulpelis pavadinimu `column`, kuriame yra mato `measureSelector`, taikyto kiekvienos eilutės kontekste, rezultatai. Mato taikymui įtakos turi dimensijų detalumo lygio ir dalių keitimas. Mato vertės bus pakoreguotos atlikus tam tikras kubo operacijas.



## Category
Cube
