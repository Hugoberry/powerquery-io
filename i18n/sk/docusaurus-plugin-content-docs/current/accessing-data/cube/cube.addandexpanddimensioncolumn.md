---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Zlúči zadanú tabuľku dimenzií do kontextu filtra kocky a zmení dimenzionálnu granularitu kontextu filtra rozbalením zadanej množiny atribútov dimenzií.


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

Zlúči zadanú tabuľku dimenzií `dimensionSelector` do kontextu filtra objektu `cube` a zmení dimenzionálnu granularitu rozbalením zadanej množiny `attributeNames` atribútov dimenzií. Atribúty dimenzie sa pridajú do tabuľkového zobrazenia so stĺpcami s názvom `newColumnNames` alebo `attributeNames` (v prípade chýbajúceho zadania).



## Category
Cube
