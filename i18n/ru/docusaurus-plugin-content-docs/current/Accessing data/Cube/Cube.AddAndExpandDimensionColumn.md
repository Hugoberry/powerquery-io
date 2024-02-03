---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Совмещает указанную таблицу измерения в контексте фильтра куба и изменяет степень гранулярности измерения контекста фильтра, расширяя указанный набор атрибутов измерения.


## Syntax

```powerquery
Cube.AddAndExpandDimensionColumn(
    cube as table,
    dimensionSelector as any,
    attributeNames as list,
    optional newColumnNames as any
) as table
```


## Details

Совмещает указанную таблицу измерения <code>dimensionSelector</code> в контексте фильтра куба <code>cube</code> и изменяет степень гранулярности измерения контекста фильтра, расширяя указанный набор атрибутов измерения <code>attributeNames</code>. Атрибуты измерения добавляются в табличное представление со столбцами <code>newColumnNames</code> или <code>attributeNames</code>, если это значение не задано.



## Category
Cube
