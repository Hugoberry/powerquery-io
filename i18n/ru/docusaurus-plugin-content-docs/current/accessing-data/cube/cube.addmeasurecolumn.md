---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Добавляет столбец к кубу, который содержит результаты меры, примененной в контексте каждой строки.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Добавляет столбец с именем `column` к `cube`, который содержит результаты меры `measureSelector`, примененной в контексте каждой строки. На применение меры оказывают влияние изменения в степени гранулярности измерения и параметры срезов. Значения меры будут поправлены после выполнения некоторых операций куба.



## Category
Cube
