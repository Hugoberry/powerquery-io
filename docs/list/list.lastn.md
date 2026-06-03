---
title: List.LastN
---

# List.LastN


Returns a list of the last item or items in the specified list. Can optionally specify how many values to return or a qualifying condition.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Returns a list of the last item or items in the specified list.

-   `list`: The list to examine. If the list is empty, an empty list is returned.
-   `countOrCondition`: (Optional) Supports gathering multiple items or filtering items. Although this parameter is listed as optional, an error occurs if this value isn't provided or is `null`. This parameter can be specified in two ways:
    -   If a number is specified, up to that many items are returned.
    -   If a condition is specified, all items are returned that meet the condition, starting at the end of the list. Once an item fails the condition, no further items are considered.


## Examples

### Example #1
Find the last value in the list \{3, 4, 5, -1, 7, 8, 2\}.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Find the last values in the list \{3, 4, 5, -1, 7, 8, 2\} that are greater than 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
