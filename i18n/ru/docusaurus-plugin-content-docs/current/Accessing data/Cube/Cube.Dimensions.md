---
title: Cube.Dimensions
---

# Cube.Dimensions


Возвращает таблицу, содержащую набор доступных измерений.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Возвращает таблицу, содержащую набор доступных измерений в пределах <code>cube</code>. Каждое измерение - это таблица с набором атрибутов измерения. Каждый атрибут измерения представлен как столбец в этой таблице измерения. Измерения в кубе можно развернуть с помощью метода Cube.AddAndExpandDimensionColumn. 



## Category
Cube
