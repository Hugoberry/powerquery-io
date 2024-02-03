---
title: List.LastN
---

# List.LastN


## Description

A lista utolsó értékét adja vissza. Megadható nem kötelezően a visszaadandó értékek száma vagy egy szűrési feltétel is.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

A(z) <code>list</code> lista utolsó elemét adja vissza. A függvény kivételt vált ki, ha a lista üres. Ez a függvény egy nem kötelező <code>countOrCondition</code> paramétert is fogad több elem összegyűjtésének vagy az elemek szűrésének támogatásához. A(z) <code>countOrCondition</code> paraméter háromféleképpen adható meg: <ul>  <li>Ha egy szám van megadva, a függvény legfeljebb annyi elemet ad vissza. </li>  <li>Ha egy feltétel van megadva, a függvény a feltételnek kezdetben megfelelő összes elemet visszaadja a lista végéről. Amint egy elem nem felel meg a feltételnek, a függvény nem vizsgálja a további elemeket. </li>  <li>Ha a paraméter null értékű, a függvény a lista utolsó elemét adja vissza.</li> </ul>


## Examples

### Example #1 
A \{3, 4, 5, -1, 7, 8, 2} lista utolsó értékének megkeresése
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
A \{3, 4, 5, -1, 7, 8, 2} lista azon utolsó értékeinek megkeresése, amelyek nagyobbak 0-nál
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
