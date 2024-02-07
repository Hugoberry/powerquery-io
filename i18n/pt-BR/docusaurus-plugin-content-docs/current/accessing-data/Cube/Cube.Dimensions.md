---
title: Cube.Dimensions
---

# Cube.Dimensions


Retorna a tabela que contém o conjunto de dimensões disponíveis.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Retorna a tabela que contém o conjunto de dimensões disponíveis no <code>cube</code>. Cada dimensão é uma tabela que contém um conjunto de atributos de dimensão, e cada atributo de dimensão é representado como uma coluna na tabela de dimensão. As dimensões podem ser expandidas no cubo usando Cube.AddAndExpandDimensionColumn. 



## Category
Cube
