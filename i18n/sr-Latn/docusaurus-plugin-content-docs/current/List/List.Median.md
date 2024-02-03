---
title: List.Median
---

# List.Median


## Description

Vraća vrednost medijane sa liste.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Vraća stavku medijane sa liste <code>list</code>. Ova funkcija vraća rezultat <code>bez vrednosti</code> ako lista sadrži vrednosti koje nisu <code>bez vrednosti</code>.    Ako postoji paran broj stavki, funkcija bira manju od dve stavke medijane osim u slučaju da se lista    sastoji isključivo od datuma i vremena, trajanja i brojeva puta, u kom slučaju vraća prosek dve stavke.


## Examples

### Example #1 
Pronalaženje medijane sa liste &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
