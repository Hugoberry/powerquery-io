---
title: List.RemoveItems
---

# List.RemoveItems


Removes items from list1 that are present in list.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Removes all occurrences of the given values in the `list2` from `list1`. If the values in `list2` don't exist in `list1`, the original list is returned.


## Examples

### Example #1
Remove the items in the list \{2, 4, 6\} from the list \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
