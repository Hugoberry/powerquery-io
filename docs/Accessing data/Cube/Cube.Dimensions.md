---
title: Cube.Dimensions
---

# Cube.Dimensions


Returns a table containing the set of available dimensions.


## Syntax

```powerquery
Cube.Dimensions(
    cube as table
) as table
```


## Remarks

Returns a table containing the set of available dimensions within the <code>cube</code>. Each dimension is a table containing a set of dimension attributes and each dimension attribute is represented as a column in the dimension table. Dimensions can be expanded in the cube using Cube.AddAndExpandDimensionColumn. 



## Category
Cube
