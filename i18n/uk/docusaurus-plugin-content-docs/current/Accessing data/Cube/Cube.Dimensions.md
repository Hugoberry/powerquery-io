---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Повертає таблицю, що містить набір доступних вимірів.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Повертає таблицю, що містить набір доступних вимірів у <code>cube</code>. Кожен вимір – це таблиця, що містить набір атрибутів вимірів, кожен з яких представлено як стовпець у таблиці вимірів. Виміри можна розгорнути в кубі за допомогою Cube.AddAndExpandDimensionColumn. 



## Category
Cube
