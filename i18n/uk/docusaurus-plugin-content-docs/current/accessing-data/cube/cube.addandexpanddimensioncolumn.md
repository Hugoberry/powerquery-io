---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Об’єднує вказану таблицю розмірності з контекстом фільтра куба й змінює деталізацію вимірів контексту фільтра, розгортаючи вказаний набір атрибутів вимірів.


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

Об’єднує вказану таблицю виміру, `dimensionSelector`, з контекстом фільтра куба, `cube`, і змінює деталізацію вимірів, розгортаючи вказаний набір атрибутів вимірів, `attributeNames`. Атрибути вимірів додано до табличного подання зі стовпцями з іменами `newColumnNames` або `attributeNames`, якщо не вказано.



## Category
Cube
