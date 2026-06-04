---
title: List.RemoveLastN
---

# List.RemoveLastN


Olyan listát ad vissza, amelyről el van távolítva a megadott számú elem a lista végéről.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Olyan listát ad vissza, amelyben el van távolítva az utolsó `countOrCondition` elem a(z) `list` lista végéről. Ha a(z) `list` kevesebb mint `countOrCondition` elemet tartalmaz, a rendszer üres listát ad vissza.

-   Ha egy szám van megadva, legfeljebb annyi elem lesz eltávolítva.
-   Ha egy feltétel van megadva, a(z) `list` végén lévő összes egymást követő egyező elem el lesz távolítva.
-   Ha ez a paraméter null értékű, a rendszer csak egy elemet távolít el.


## Examples

### Example #1
Lista létrehozása az \{1, 2, 3, 4, 5\} listából az utolsó 3 szám elhagyásával.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Olyan lista létrehozása az \{5, 4, 2, 6, 4\} listából, amely egy 3-nál kisebb számmal végződik.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
