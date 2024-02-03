---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


## Description

Odebere všechny výskyty vstupních hodnot.


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

Odebere všechny výskyty daných hodnot v seznamu <code>list2</code> ze seznamu <code>list1</code>. Pokud hodnoty v seznamu <code>list2</code> v seznamu <code>list1</code> neexistují, je vrácen původní seznam.    K řízení testování rovnosti lze zadat volitelnou hodnotu kritérií rovnice <code>equationCriteria</code>. 


## Examples

### Example #1 
Vytvoří ze seznamu \{1, 2, 3, 4, 5, 5} seznam bez hodnot \{1, 5}.
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
