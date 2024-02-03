---
title: List.RemoveRange
---

# List.RemoveRange


## Description

Uklanja „count“ broj vrednosti počev od navedenog položaja.


## Syntax

```powerquery
List.RemoveRange(
    list as list,
    index as number,
    optional count as number
) as list
```


## Details

Uklanja <code>count</code> vrednosti u <code>list</code> počev od navedenog položaja, <code>index</code>.


## Examples

### Example #1 
Uklanjanje 3 vrednosti sa liste \{1, 2, 3, 4, -6, -2, -1, 5} počev od indeksa 4.
```powerquery
List.RemoveRange({1, 2, 3, 4, -6, -2, -1, 5}, 4, 3)
```

Result: 
```powerquery
{1, 2, 3, 4, 5}
```




## Category
List.Transformation functions
