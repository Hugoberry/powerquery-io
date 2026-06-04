---
title: List.Skip
---

# List.Skip


Olyan listát ad vissza, amelyről ki van hagyva a megadott számú elem a lista elejéről.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Egy olyan listát ad vissza, amelyből ki van hagyva a(z) `list` lista első eleme. Ha a(z) `list` üres lista, a rendszer üres listát ad vissza. Ez a függvény egy nem kötelező `countOrCondition` paramétert fogad, amivel több érték kihagyását támogatja az alábbiak szerint.

-   Ha egy szám van megadva, legfeljebb annyi elem lesz kihagyva.
-   Ha egy feltétel van megadva, a(z) `list` elején lévő összes egymást követő egyező elem ki lesz hagyva.
-   Ha ez a paraméter null értékű, az alapértelmezett viselkedés lesz figyelembe véve.


## Examples

### Example #1
Lista létrehozása az \{1, 2, 3, 4, 5\} listából az első 3 szám elhagyásával
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Olyan lista létrehozása az \{5, 4, 2, 6, 1\} listából, amely egy 3-nál kisebb számmal kezdődik
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
