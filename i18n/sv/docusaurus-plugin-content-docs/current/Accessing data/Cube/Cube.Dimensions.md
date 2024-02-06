---
title: Cube.Dimensions
---

# Cube.Dimensions


Returnerar en tabell med uppsättningen tillgängliga dimensioner.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Returnerar en tabell med uppsättningen tillgängliga dimensioner i <code>cube</code>. Varje dimension är en tabell med en uppsättning dimensionsattribut och varje dimensionsattribut representeras som en kolumn i dimensionstabellen. Dimensioner kan expanderas i kuben med Cube.AddAndExpandDimensionColumn. 



## Category
Cube
