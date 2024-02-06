---
title: Cube.CollapseAndRemoveColumns
---

# Cube.CollapseAndRemoveColumns


Изменяет степень гранулярности измерения контекста фильтра куба, сворачивая атрибуты, сопоставленные с указанными столбцами.


## Syntax

```powerquery
Cube.CollapseAndRemoveColumns(
    cube as table,
    columnNames as list
) as table
```


## Remarks

Изменяет степень гранулярности измерения контекста фильтра <code>cube</code>, сворачивая атрибуты, сопоставленные с указанными столбцами <code>columnNames</code>. Столбцы также удаляются из табличного представления куба.



## Category
Cube
