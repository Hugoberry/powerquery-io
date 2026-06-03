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

Fjerner alle forekomster af de angivne værdier i `list2` fra listen `list1`. Hvis værdierne i `list2` ikke findes i `list1`, returneres den oprindelige liste. Du kan angive en valgfri kriterieværdi for ligningen, `equationCriteria`, for at styre kvalitetstesten.


## Examples

### Example #1
Opret en liste ud fra \{1, 2, 3, 4, 5, 5\} uden \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
