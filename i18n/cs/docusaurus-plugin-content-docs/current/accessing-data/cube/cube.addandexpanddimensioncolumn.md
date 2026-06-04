---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Sloučí zadanou tabulku dimenze do kontextu filtru datové krychle a změní dimenzionální členitost kontextu filtru rozbalením zadané sady atributů dimenzí.


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

Sloučí zadanou tabulku dimenze `dimensionSelector` do kontextu filtru `cube` a změní dimenzionální členitost kontextu filtru rozbalením zadané sady atributů dimenzí `attributeNames`. Atributy dimenze jsou přidány do tabulkového zobrazení pomocí sloupců s názvem `newColumnNames`, nebo `attributeNames`, pokud nebyl název zadán.



## Category
Cube
