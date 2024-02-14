---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Fjerner alle forekomster af inputværdierne.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Fjerner alle forekomster af de angivne værdier i <code>list2</code> fra listen <code>list1</code>. Hvis værdierne i <code>list2</code> ikke findes i <code>list1</code>, returneres den oprindelige liste.    Du kan angive en valgfri kriterieværdi for ligningen, <code>equationCriteria</code>, for at styre kvalitetstesten. 


## Examples

### Example #1 
Opret en liste ud fra \{1, 2, 3, 4, 5, 5} uden \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
