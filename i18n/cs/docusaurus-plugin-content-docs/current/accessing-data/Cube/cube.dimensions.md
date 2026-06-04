---
title: Cube.Dimensions
---

# Cube.Dimensions


Vrací tabulku obsahující sadu dostupných dimenzí.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Vrací tabulku obsahující sadu dostupných dimenzí v rámci `cube`. Každá dimenze je tabulka obsahující sadu atributů dimenze a každý atribut dimenze je reprezentován jako sloupec v tabulce dimenze. Dimenzi lze v datové krychli rozbalit příkazem Cube.AddAndExpandDimensionColumn.



## Category
Cube
