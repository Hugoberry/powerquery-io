---
title: List.Skip
---

# List.Skip


Vraća listu koja preskače navedeni broj elemenata na početku liste.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vraća listu koja preskače prvi element liste `list`. Ako je `list` prazna lista, vraća se prazna lista. Ova funkcija preuzima opcionalni parametar, `countOrCondition`, da bi se podržalo preskakanje više vrednosti kao što je navedeno ispod.

-   Ako je naveden broj, preskače se najviše toliko stavki.
-   Ako je naveden uslov, sve uzastopne stavke koje se podudaraju na početku`list` se preskaču.
-   Ako je ovaj parametar bez vrednosti, primećuje se podrazumevano ponašanje.


## Examples

### Example #1
Kreiranje liste od \{1, 2, 3, 4, 5\} bez prva 3 broja.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Kreira listu od \{5, 4, 2, 6, 1\} koja počinje brojem manjim od 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
