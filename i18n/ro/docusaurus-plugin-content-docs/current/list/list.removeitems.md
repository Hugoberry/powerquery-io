---
title: List.RemoveItems
---

# List.RemoveItems


Elimină elementele din list1 care sunt prezente în listă.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Elimină toate ocurenţele valorilor date în `list2` din `list1`. Dacă valorile din `list2` nu există în `list1`, se returnează lista originală.


## Examples

### Example #1
Eliminaţi elementele din lista \{2, 4, 6\} din lista \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
