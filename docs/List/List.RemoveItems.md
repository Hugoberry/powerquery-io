---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Removes items from list1 that are present in list.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Removes all occurrences of the given values in the <code>list2</code> from <code>list1</code>. If the values in <code>list2</code> don't exist in <code>list1</code>, the original list is returned.


## Examples

### Example #1 
Remove the items in the list \{2, 4, 6} from the list \{1, 2, 3, 4, 2, 5, 5}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
