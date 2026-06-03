---
title: List.RemoveItems
---

# List.RemoveItems


Fjerner elementer fra liste1, der findes på listen.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Fjerner alle forekomster af de angivne værdier i `list2` fra `list1`. Hvis værdierne i `list2` ikke findes i `list1`, returneres den oprindelige liste.


## Examples

### Example #1
Fjern elementerne på listen \{2, 4, 6\} fra listen \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
