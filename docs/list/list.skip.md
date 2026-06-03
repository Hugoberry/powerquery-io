---
title: List.Skip
---

# List.Skip


Returns a list that skips the specified number of elements at the beginning of the list.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Returns a list that skips the first element of list `list`. If `list` is an empty list an empty list is returned. This function takes an optional parameter, `countOrCondition`, to support skipping multiple values as listed below.

-   If a number is specified, up to that many items are skipped.
-   If a condition is specified, any consecutive matching items at the start of `list` are skipped.
-   If this parameter is null, the default behavior is observed.


## Examples

### Example #1
Create a list from \{1, 2, 3, 4, 5\} without the first 3 numbers.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Create a list from \{5, 4, 2, 6, 1\} that starts with a number less than 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
