---
title: List.FirstN
---

# List.FirstN


## Description

A lista első elemeinek halmazát adja vissza, a visszaadandó elemek megadott darabszáma vagy egy feltétel teljesülése alapján.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Ha egy szám van megadva, a függvény legfeljebb annyi elemet ad vissza. </li>  <li>Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő összes elemet visszaadja. Amint egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. </li> </ul>


## Examples

### Example #1 
A \{3, 4, 5, -1, 7, 8, 2} lista azon kezdeti értékeinek megkeresése, amelyek nagyobbak 0-nál
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
