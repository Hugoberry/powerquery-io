---
title: List.Median
---

# List.Median


Vraća vrednost medijane sa liste.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Vraća stavku medijane sa liste `list`. Ova funkcija vraća rezultat `bez vrednosti` ako lista sadrži vrednosti koje nisu `bez vrednosti`. Ako postoji paran broj stavki, funkcija bira manju od dve stavke medijane osim u slučaju da se lista sastoji isključivo od datuma i vremena, trajanja i brojeva puta, u kom slučaju vraća prosek dve stavke.


## Examples

### Example #1
Pronalaženje medijane sa liste `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
