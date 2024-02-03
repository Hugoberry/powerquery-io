---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Vraća listu koja preskače navedeni broj elemenata na početku liste.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Vraća listu koja uklanja prvi element liste <code>list</code>. Ako je <code>list</code> prazna lista, vraća se prazna lista.Ova funkcija uzima opcionalni parametar, <code>countOrCondition</code>, da bi podržala uklanjanje više dolenavedenih vrednosti. <ul> <li>Ako je naveden broj, uklanja se do toliko vrednosti. </li> <li>Ako je naveden uslov, vraćena lista počinje prvim elementom u <code>list</code> koji ispunjava uslove. Kada stavka ne ispuni uslov, druge stavke se ne uzimaju u obzir. </li> <li>Ako je ovaj parametar bez vrednosti, posmatra se podrazumevano ponašanje. </li> </ul>


## Examples

### Example #1 
Kreiranje liste od \{1, 2, 3, 4, 5} bez prva 3 broja.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Kreira listu od \{5, 4, 2, 6, 1} koja počinje brojem manjim od 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
