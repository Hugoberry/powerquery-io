---
title: Cube.AddMeasureColumn
---

# Cube.AddMeasureColumn


Додає стовпець до кубу з результатами міри, застосованої до контексту кожного рядка.


## Syntax

```powerquery
Cube.AddMeasureColumn(
    cube as table,
    column as text,
    measureSelector as any
) as table
```


## Remarks

Додає стовпець з іменем `column` до `cube` з результатами міри `measureSelector`, застосованої до контексту кожного рядка. На застосування міри впливають зміни деталізації та розподілу вимірів. Значення мір корегуються після виконання певних операцій куба.



## Category
Cube
