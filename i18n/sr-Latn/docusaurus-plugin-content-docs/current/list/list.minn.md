---
title: List.MinN
---

# List.MinN


Vraća minimalne vrednosti sa liste. Može se navesti broj vrednosti koje treba vratiti ili uslov za filtriranje.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Vraća minimalne vrednosti sa liste, `list`. Parametar, `countOrCondition`, navodi broj vrednosti koje treba vratiti ili uslov za filtriranje. Opcionalni parametar, `comparisonCriteria`, navodi kako treba porediti vrednosti sa liste.

-   `list`: Lista vrednosti.
-   `countOrCondition`: Ako se navede broj, vraća se lista od najviše `countOrCondition` stavki po rastućem redosledu. Ako se navede uslov, vraća se lista stavki koje inicijalno zadovoljavaju taj uslov. Ako neka stavka ne zadovolji uslov, kasnije stavke se ne uzimaju u obzir. Ako je ovaj parametar bez vrednosti, vraća se najmanja vrednost sa liste.
-   `comparisonCriteria`: *(Opcionalno) Opcionalna* `comparisonCriteria` vrednost može da se navede da bi se utvrdilo kako da uporedite stavke sa liste. Ako je ovaj parametar bez vrednosti, koristi se podrazumevani upoređivač.


## Examples

### Example #1
Pronalaženje 5 najmanjih vrednosti sa liste `{3, 4, 5, -1, 7, 8, 2}`.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
