---
title: List.Median
---

# List.Median


## Description

Vrne mediano na seznamu.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

Vrne mediano elementa seznama <code>list</code>. Ta funkcija vrne <code>ničelno</code>vrednost, če seznam vsebuje vrednosti, ki niso <code>ničelne</code>.    Če je število elementov sodo, funkcija izbere manjšo od dveh median elementov, razen če je seznam    sestavljen v celoti iz datumov in ur, trajanj, številk ali časov – v tem primeru vrne povprečje dveh elementov.


## Examples

### Example #1 
Poiščite mediano seznama &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt;.
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
