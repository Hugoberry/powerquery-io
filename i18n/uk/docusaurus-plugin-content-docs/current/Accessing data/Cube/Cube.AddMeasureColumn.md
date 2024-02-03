---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


## Description

Додає стовпець до кубу з результатами міри, застосованої до контексту кожного рядка.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Details

Додає стовпець з іменем <code>column</code> до <code>cube</code> з результатами міри <code>measureSelector</code>, застосованої до контексту кожного рядка. На застосування міри впливають зміни деталізації та розподілу вимірів. Значення мір корегуються після виконання певних операцій куба.



## Category
Cube
