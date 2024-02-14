---
title: Cube.Dimensions
---

# Cube.Dimensions


Devuelve una tabla que contiene el conjunto de dimensiones disponibles.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Devuelve una tabla que contiene el conjunto de dimensiones disponibles dentro del <code>cube</code>. Cada dimensión es una tabla que contiene un conjunto de atributos de dimensión y cada atributo de dimensión se representa como una columna en la tabla de dimensiones. Se pueden expandir dimensiones en el cubo mediante Cube.AddAndExpandDimensionColumn. 



## Category
Cube
