---
title: List.Transform
---

# List.Transform


## Description

Returns a new list of values computed from this list.


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Details

Returns a new list of values by applying the transform function <code>transform</code> to the list, <code>list</code>.


## Examples

### Example #1 
Add 1 to each value in the list \{1, 2}.
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
