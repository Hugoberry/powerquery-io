---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Elimină toate ocurenţele valorilor de intrare.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Elimină toate ocurenţele valorilor specificate în `list2` din lista `list1`. Dacă valorile din `list2` nu există în `list1`, se returnează lista originală. O valoare opţională pentru criteriile ecuaţiei, `equationCriteria`, poate fi specificată pentru a controla testarea egalităţii.


## Examples

### Example #1
Creaţi o listă de la \{1, 2, 3, 4, 5, 5\} fără \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
