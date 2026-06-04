---
title: Cube.Dimensions
---

# Cube.Dimensions


Az elérhető dimenziók készletét tartalmazó táblát ad vissza.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

A(z) `cube` kockában elérhető dimenziók készletét tartalmazó táblát ad vissza. Mindegyik dimenzió a dimenzióattribútumok készletét tartalmazó tábla lesz, és mindegyik dimenzióattribútumnak egy oszlop felel meg a dimenziótáblában. A dimenziók kibontásához a Cube.AddAndExpandDimensionColumn függvény használható a kockában.



## Category
Cube
