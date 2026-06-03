---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Adds a column to the cube that contains the results of the measure applied in the row context of each row.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Adds a column with the name `column` to the `cube` that contains the results of the measure `measureSelector` applied in the row context of each row. Measure application is affected by changes to dimension granularity and slicing. Measure values will be adjusted after certain cube operations are performed.



## Category
Cube
