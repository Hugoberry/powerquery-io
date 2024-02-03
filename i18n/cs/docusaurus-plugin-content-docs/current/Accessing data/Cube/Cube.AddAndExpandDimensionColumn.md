---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

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


## Details

Sloučí zadanou tabulku dimenze <code>dimensionSelector</code> do kontextu filtru datové krychle <code>cube</code> a změní dimenzionální členitost kontextu filtru rozbalením zadané sady atributů dimenzí <code>attributeNames</code>. Atributy dimenze jsou přidány do tabulkového zobrazení pomocí sloupců s názvem <code>newColumnNames</code>, nebo <code>attributeNames</code> (pokud nebyl název zadán).



## Category
Cube
