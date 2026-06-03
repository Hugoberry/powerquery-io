---
title: List.Split
---

# List.Split


Splits the specified list into a list of lists using the specified page size.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Splits `list` into a list of lists where the first element of the output list is a list containing the first `pageSize` elements from the source list, the next element of the output list is a list containing the next `pageSize` elements from the source list, and so on.



## Category
List.Transformation functions
