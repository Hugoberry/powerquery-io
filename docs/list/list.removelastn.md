---
title: List.RemoveLastN
---

# List.RemoveLastN


Returns a list that removes the specified number of elements from the end of the list.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returns a list that removes the last `countOrCondition` elements from the end of list `list`. If `list` has less than `countOrCondition` elements, an empty list is returned.

-   If a number is specified, up to that many items are removed.
-   If a condition is specified, any consecutive matching items at the end of `list` are removed.
-   If this parameter is null, only one item is removed.


## Examples

### Example #1
Create a list from \{1, 2, 3, 4, 5\} without the last 3 numbers.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Create a list from \{5, 4, 2, 6, 4\} that ends with a number less than 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
