---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Returns a list that skips the specified number of elements at the beginning of the list.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returns a list that removes the first element of list `list`. If `list` is an empty list an empty list is returned. This function takes an optional parameter, `countOrCondition`, to support removing multiple values as listed below.

-   If a number is specified, up to that many items are removed.
-   If a condition is specified, any consecutive matching items at the start of `list` are removed.
-   If this parameter is null, the default behavior is observed.


## Examples

### Example #1
Create a list from \{1, 2, 3, 4, 5\} without the first 3 numbers.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Create a list from \{5, 4, 2, 6, 1\} that starts with a number less than 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
