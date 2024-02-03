---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Olyan listát ad vissza, amelyről el van távolítva a megadott számú elem a lista végéről.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Olyan listát ad vissza, amelyről el van távolítva az utolsó <code>countOrCondition</code> elem a(z) <code>list</code> lista végéről. Ha <code>list</code> elemeinek száma kevesebb, mint <code>countOrCondition</code>, az eredmény üres lista lesz. <ul> <li>Ha egy szám van megadva, legfeljebb ennyi elemet távolít el. </li> <li>Ha egy feltétel van megadva, a visszaadott lista a(z) <code>list</code> alulról számított első olyan elemével végződik, amely megfelel a feltételnek. Amint egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. </li> <li>Ha ez a paraméter null értékű, a függvény csak egy elemet távolít el. </li> </ul>


## Examples

### Example #1 
Lista létrehozása az \{1, 2, 3, 4, 5} listából az utolsó 3 szám elhagyásával.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Olyan lista létrehozása az \{5, 4, 2, 6, 4} listából, amely egy 3-nál kisebb számmal végződik.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
