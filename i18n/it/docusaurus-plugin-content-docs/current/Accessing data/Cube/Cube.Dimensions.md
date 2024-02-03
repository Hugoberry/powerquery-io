---
title: Cube.Dimensions
---

# Cube.Dimensions


## Description

Restituisce una tabella contenente il set di dimensioni disponibili.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Details

Restituisce una tabella contenente il set di dimensioni disponibili all'interno di <code>cube</code>. Ogni dimensione è una tabella contenente un set di attributi di dimensione e ogni attributo di dimensione è rappresentato come colonna della tabella delle dimensioni. Le dimensioni possono essere espanse nel cubo utilizzando Cube.AddAndExpandDimensionColumn. 



## Category
Cube
