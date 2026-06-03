---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Выполняет слияние указанной таблицы измерения с контекстом фильтра куба и изменяет степень гранулярности измерения контекста фильтра, расширяя указанный набор атрибутов измерения.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Remarks

Выполняет слияние указанной таблицы измерения `dimensionSelector`с контекстом фильтра `cube` и изменяет степень гранулярности измерения контекста фильтра, расширяя указанный набор атрибутов измерения `attributeNames`. Атрибуты измерения добавляются в табличное представление в виде столбцов с именами `newColumnNames` (или `attributeNames`, если это значение не задано).



## Category
Cube
