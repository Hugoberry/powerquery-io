---
title: List.RemoveItems
---

# List.RemoveItems


Odebere ze seznamu list1 položky, které jsou v seznamu list.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

Odebere všechny výskyty daných hodnot v seznamu `list2` ze seznamu `list1`. Pokud hodnoty v seznamu `list2` v seznamu `list1` neexistují, je vrácen původní seznam.


## Examples

### Example #1
Odebere ze seznamu \{1, 2, 3, 4, 2, 5, 5\} položky seznamu \{2, 4, 6\}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
