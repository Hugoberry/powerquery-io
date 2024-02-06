---
title: Cube.AddAndExpandDimensionColumn
---

# Cube.AddAndExpandDimensionColumn


Führt die angegebene Dimensionstabelle mit dem Filterkontext des Cubes zusammen und ändert die Dimensionsgranularität des Filterkontexts, indem der angegebene Satz von Dimensionsattributen erweitert wird.


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

Führt die angegebene Dimensionstabelle '<code>dimensionSelector</code>' mit dem Filterkontext des Cubes '<code>cube</code>' zusammen und ändert die Dimensionsgranularität, indem der angegebene Satz '<code>attributeNames</code>' von Dimensionsattributen erweitert wird. Die Dimensionsattribute werden der tabellarischen Sicht mit dem Spaltennamen '<code>newColumnNames</code>' oder '<code>attributeNames</code>' hinzugefügt, falls keine angegeben wurde.



## Category
Cube
