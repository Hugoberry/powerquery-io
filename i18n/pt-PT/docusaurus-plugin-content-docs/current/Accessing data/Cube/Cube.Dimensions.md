---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Devolve uma tabela que contém o conjunto de dimensões disponíveis.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Devolve uma tabela que contém o conjunto de dimensões disponíveis no <code>cube</code>. Cada dimensão é uma tabela que contém um conjunto de atributos de dimensão e cada atributo de dimensão é representado como uma coluna na tabela de dimensão. É possível expandir as dimensões no cubo utilizando Cube.AddAndExpandDimensionColumn. 



## Category
Cube
