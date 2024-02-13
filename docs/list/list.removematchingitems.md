---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Removes all occurrences of the input values.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Removes all occurrences of the given values in <code>list2</code> from the list <code>list1</code>. If the values in <code>list2</code> don't exist in <code>list1</code>, the original list is returned.    An optional equation criteria value, <code>equationCriteria</code>, can be specified to control equality testing. 


## Examples

### Example #1 
Create a list from \{1, 2, 3, 4, 5, 5} without \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
