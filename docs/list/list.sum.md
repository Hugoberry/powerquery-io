---
title: List.Sum
---

# List.Sum


Returns the sum of the items in the list.


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

Returns the sum of the non-null values in the list, `list`. Returns null if there are no non-null values in the list.


## Examples

### Example #1
Find the sum of the numbers in the list `{1, 2, 3}`.
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
