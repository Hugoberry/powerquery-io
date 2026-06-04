---
title: List.LastN
---

# List.LastN


A megadott lista utolsó elemének vagy elemeinek listáját adja vissza. Opcionálisan megadhatja a visszaadandó értékek számát vagy a minősítő feltételt.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

A megadott lista utolsó elemének vagy elemeinek listáját adja vissza.

-   `list`: A vizsgálandó lista. Ha a lista üres, üres lista adódik vissza.
-   `countOrCondition`: (Nem kötelező) Támogatja több elem gyűjtését vagy az elemek szűrését. Bár ez a paraméter nem kötelezőként van felsorolva, hiba történik, ha ez az érték nincs megadva, vagy az értéke `null`. Ez a paraméter kétféleképpen adható meg:
    -   Ha egy szám van megadva, legfeljebb annyi elem lesz visszaadva.
    -   Ha egy feltétel meg van adva, minden olyan elem visszaadódik, amely megfelel a feltételnek, a lista végétől kiindulva. Ha egy elem nem felel meg a feltételnek, a további elemek nem lesznek figyelembe véve.


## Examples

### Example #1
A \{3, 4, 5, -1, 7, 8, 2\} lista utolsó értékének megkeresése
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
A \{3, 4, 5, -1, 7, 8, 2\} lista azon utolsó értékeinek megkeresése, amelyek nagyobbak 0-nál
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
