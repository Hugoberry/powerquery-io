---
title: List.RemoveItems
---

# List.RemoveItems


## Description

Odebere ze seznamu list1 položky, které jsou v seznamu list.


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Details

Odebere všechny výskyty daných hodnot v seznamu <code>list2</code> ze seznamu <code>list1</code>. Pokud hodnoty v seznamu <code>list2</code> v seznamu <code>list1</code> neexistují, je vrácen původní seznam.


## Examples

### Example #1 
Odebere ze seznamu \{1, 2, 3, 4, 2, 5, 5} položky seznamu \{2, 4, 6}.
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
