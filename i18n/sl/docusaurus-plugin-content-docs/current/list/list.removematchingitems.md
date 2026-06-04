---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Odstrani vse pojavitve vhodnih vrednosti.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Odstrani vse pojavitve danih vrednosti na seznamu `list2` iz seznama `list1`. Če vrednosti na seznamu `list2` ne obstajajo na seznamu `list1`, je vrnjen izvirni seznam. Določite lahko izbirno vrednost kriterijev enakosti `equationCriteria` za nadzor preskušanja enakosti.


## Examples

### Example #1
Ustvarite seznam iz \{1, 2, 3, 4, 5, 5\} brez \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
