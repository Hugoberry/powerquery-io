---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Retorna una taula que conté el conjunt de dimensions disponibles.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Retorna una taula que conté el conjunt de dimensions disponibles dins de <code>cube</code>. Cada dimensió és una taula que conté un conjunt d'atributs de dimensió i cada atribut de dimensió es representa com una columna a la taula de dimensions. Les dimensions es poden expandir al cub utilitzant Cube.AddAndExpandDimensionColumn. 



## Category
Cube
