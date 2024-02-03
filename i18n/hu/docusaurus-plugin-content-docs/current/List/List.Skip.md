---
title: List.Skip
---

# List.Skip


## Description

Olyan listát ad vissza, amelyről ki van hagyva a megadott számú elem a lista elejéről.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Egy olyan listát ad vissza, amelyből ki van hagyva a(z) <code>list</code> lista első eleme. Ha a(z) <code>list</code> lista üres, az eredmény üres lista lesz.Ez a függvény egy nem kötelező <code>countOrCondition</code> paramétert is elfogad több érték kihagyásának támogatásához az alább ismertetett módon. <ul> <li>Ha egy szám van megadva, legfeljebb annyi elem lesz kihagyva. </li> <li>Ha egy feltétel van megadva, a visszaadott lista a(z) <code>list</code> első olyan elemével kezdődik, amely megfelel a feltételnek. Ha egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. </li> <li>Ha ez a paraméter nullértékű, a függvény az alapértelmezett viselkedést alkalmazza. </li> </ul>


## Examples

### Example #1 
Lista létrehozása az \{1, 2, 3, 4, 5} listából az első 3 szám elhagyásával
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Olyan lista létrehozása az \{5, 4, 2, 6, 1} listából, amely egy 3-nál kisebb számmal kezdődik
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
