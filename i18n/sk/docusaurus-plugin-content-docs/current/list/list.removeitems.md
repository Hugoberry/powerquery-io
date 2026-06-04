---
title: List.RemoveItems
---

# List.RemoveItems


Odstráni položky zo zoznamu list1, ktoré sa nachádzajú v zozname.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Odstráni všetky výskyty daných hodnôt v zozname `list2` zo zoznamu `list1`. Ak hodnoty v zozname `list2` neexistujú v zozname `list1`, vráti sa pôvodný zoznam.


## Examples

### Example #1
Odstráňte položky v zozname \{2, 4, 6\} zo zoznamu \{1, 2, 3, 4, 2, 5, 5\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
