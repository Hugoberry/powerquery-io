---
title: List.RemoveLastN
---

# List.RemoveLastN


Vraća listu koja uklanja navedeni broj elemenata na kraju liste.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Vraća listu koja uklanja poslednje `countOrCondition`elemente sa kraja liste `list`. Ako `list` ima manje od `countOrCondition` elemenata, vraća se prazna lista.

-   Ako je naveden broj, uklanja se najviše toliko stavki.
-   Ako je naveden uslov, sve uzastopne stavke koje se podudaraju na kraju `list` se uklanjaju.
-   Ako je ovaj parametar bez vrednosti, uklanja se samo jedna stavka.


## Examples

### Example #1
Kreiranje liste od \{1, 2, 3, 4, 5\} bez poslednja 3 broja.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Kreiranje liste od \{5, 4, 2, 6, 4\} koja se završava brojem manjim od 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
