---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Odstrani vse pojavitve vhodnih vrednosti.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Odstrani vse pojavitve danih vrednosti na seznamu <code>list2</code> iz seznama <code>list1</code>. Če vrednosti na seznamu <code>list2</code> ne obstajajo na seznamu <code>list1</code>, je vrnjen izvirni seznam.    Določite lahko izbirno vrednost kriterijev enakosti <code>equationCriteria</code> za nadzor preskušanja enakosti. 


## Examples

### Example #1 
Ustvarite seznam iz \{1, 2, 3, 4, 5, 5} brez \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
