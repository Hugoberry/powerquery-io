---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


Odebere všechny výskyty vstupních hodnot.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

Odebere všechny výskyty daných hodnot v seznamu `list2` ze seznamu `list1`. Pokud hodnoty v seznamu `list2` v seznamu `list1` neexistují, je vrácen původní seznam. K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice `equationCriteria`.


## Examples

### Example #1
Vytvoří ze seznamu \{1, 2, 3, 4, 5, 5\} seznam bez hodnot \{1, 5\}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
