---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Vrací tabulku obsahující sadu dostupných dimenzí.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Vrací tabulku obsahující sadu dostupných dimenzí v rámci <code>cube</code>. Každá dimenze je tabulka obsahující sadu atributů dimenze a každý atribut dimenze je reprezentován jako sloupec v tabulce dimenze. Dimenzi lze v datové krychli rozbalit příkazem Cube.AddAndExpandDimensionColumn. 



## Category
Cube
