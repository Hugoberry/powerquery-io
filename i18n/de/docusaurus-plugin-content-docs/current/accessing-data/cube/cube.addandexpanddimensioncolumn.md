---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Führt die angegebene Dimensionstabelle in den Filterkontext des Cubes zusammen und ändert die Dimensionsgranularität des Filterkontexts, indem der angegebene Satz von Dimensionsattributen erweitert wird.


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

Führt die angegebene Dimensionstabelle „`dimensionSelector`“ mit dem Filterkontext des Cubes „`cube`“ zusammen und ändert die Dimensionsgranularität, indem der angegebene Satz „`attributeNames`“ von Dimensionsattributen erweitert wird. Die Dimensionsattribute werden der tabellarischen Sicht mit dem Spaltennamen „`newColumnNames`“ oder „`attributeNames`“ hinzugefügt, falls keine angegeben wurde.



## Category
Cube
