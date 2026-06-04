---
title: List.Median
---

# List.Median


Vrne mediano na seznamu.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Remarks

Vrne mediano elementa seznama `list`. Ta funkcija vrne `ničelno`vrednost, če seznam vsebuje vrednosti, ki niso `ničelne`. Če je število elementov sodo, funkcija izbere manjšo od dveh median elementov, razen če je seznam sestavljen v celoti iz datumov in ur, trajanj, številk ali časov – v tem primeru vrne povprečje dveh elementov.


## Examples

### Example #1
Poiščite mediano seznama `{5, 3, 1, 7, 9}`.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
