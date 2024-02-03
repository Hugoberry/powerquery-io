---
title: List.Median
---

# List.Median


## Description

A lista középértéket adja vissza.


## Syntax

```powerquery
List.Median(
    list as list,
    optional comparisonCriteria as any
) as any
```


## Details

A <code>list</code> lista középértékének megfelelő elemet adja vissza. A függvény <code>null</code> értéket ad vissza, ha a lista nem tartalmaz <code>null</code> értéktől eltérő értéket.    Páros számú elem esetén a függvény kiválasztja a két középérték elem közül a kisebbet, kivéve, ha a lista    kizárólag datetime értékekből, időtartamokból, számokból vagy időértékekből áll. Ez esetben a két elem átlagát adja vissza.


## Examples

### Example #1 
Az &lt;code&gt;\{5, 3, 1, 7, 9}&lt;/code&gt; lista középértékének megkeresése
```powerquery
List.Median({5, 3, 1, 7, 9})
```

Result: 
```powerquery
5
```




## Category
List.Ordering
