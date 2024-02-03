---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Об’єднує вказану таблицю розмірності з контекстом фільтра куба та змінює деталізацію вимірів контексту фільтра, розгортаючи вказаний набір атрибутів вимірів.


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

Об’єднує вказану таблицю розмірності, <code>dimensionSelector</code>, з контекстом фільтра куба, <code>cube</code>, та змінює деталізацію вимірів, розгортаючи вказаний набір, <code>attributeNames</code>, атрибутів вимірів. Атрибути вимірів додано до табличного подання зі стовпцями з іменами <code>newColumnNames</code> або <code>attributeNames</code>, якщо не вказано.



## Category
Cube
