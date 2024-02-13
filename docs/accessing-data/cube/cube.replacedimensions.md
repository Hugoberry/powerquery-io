---
title: Cube.ReplaceDimensions
---

# Cube.ReplaceDimensions


Replaces the set of dimensions returned by Cube.Dimensions.


## Syntax

```powerquery
Cube.ReplaceDimensions(
    cube as table,
    dimensions as any
) as table
```


## Remarks

Replaces the set of dimensions returned by <code>Cube.Dimensions</code>.    For example, this function can be used to add an ID column to a dimension attribute, so that the data source can group on the ID rather than the displayed value.



## Category
Cube
