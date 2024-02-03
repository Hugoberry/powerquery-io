---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


## Description

Zlúči zadanú tabuľku dimenzií do kontextu filtra kocky a zmení granularitu dimenzie kontextu filtra prostredníctvom rozbalenia zadanej množiny atribútov dimenzie.


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

Zlúči zadanú tabuľku dimenzií <code>dimensionSelector</code> do kontextu filtra kocky <code>cube</code> a zmení granularitu dimenzie prostredníctvom rozbalenia zadanej množiny <code>attributeNames</code> atribútov dimenzie. Atribúty dimenzie sa pridajú do tabuľkového zobrazenia so stĺpcami s názvom <code>newColumnNames</code> alebo <code>attributeNames</code> (v prípade chýbajúceho zadania).



## Category
Cube
