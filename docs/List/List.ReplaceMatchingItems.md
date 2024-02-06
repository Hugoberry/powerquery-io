---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


Applies each replacement of \{ old, new }.


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Remarks

Performs the given replacements to the list <code>list</code>. A replacement operation <code>replacements</code> consists of a list of two values, the old value and new value, provided in a list.    An optional equation criteria value, <code>equationCriteria</code>, can be specified to control equality testing.


## Examples

### Example #1 
Create a list from \{1, 2, 3, 4, 5} replacing the value 5 with -5, and the value 1 with -1.
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
