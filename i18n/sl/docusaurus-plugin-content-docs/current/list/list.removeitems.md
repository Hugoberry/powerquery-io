---
title: List.RemoveItems
---

# List.RemoveItems


Odstrani elemente iz"list1", ki so na seznamu.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Odstrani vse pojavitve danih vrednosti na seznamu `list2` iz seznama `list1`. Če vrednosti na seznamu `list2` ne obstajajo na seznamu `list1`, je vrnjen izvirni seznam.


## Examples

### Example #1
Odstranite elemente na seznamu \{2, 4, 6\} iz seznama \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
