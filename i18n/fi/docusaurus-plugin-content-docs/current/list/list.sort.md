---
title: List.Sort
---

# List.Sort


Lajittelee tietoluettelon määritettyjen ehtojen perusteella.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Remarks

Lajittelee tietoluettelo `list` määritettyjen valinnaisten ehtojen mukaisesti. Vertailuehdoksi voidaan määrittää valinnainen parametri `comparisonCriteria`. Tämä voi vaatia seuraavia arvoja:

-   Jos haluat hallita järjestystä, vertailuehto voi olla Order enum -arvo. (`Order.Descending`, `Order.Ascending`).
-   Lajitteluun käytettävän avaimen laskemista varten voidaan käyttää yhden argumentin funktiota.
-   Voit valita sekä avaimen että hallintajärjestyksen. Vertailuehto voi olla avaimen ja järjestyksen sisältävä luettelo (`{each 1 / _, Order.Descending}`).
-   Vertailun täydelliseen hallintaan voidaan käyttää kahden argumentin funktiota (kuten Value.Compare). Tämä funktio välittää luettelon kaksi kohdetta (mitkä tahansa kaksi kohdetta missä tahansa järjestyksessä). Funktion tulee palauttaa jokin seuraavista arvoista:
    -   `-1`: Ensimmäinen kohde on pienempi kuin toinen kohde.
    -   `0`: Kohteet ovat yhtä suuria.
    -   `1`: Ensimmäinen kohde on suurempi kuin toinen kohde.


## Examples

### Example #1
Lajittele luettelo \{2, 3, 1\}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2
Lajittele luettelo \{2, 3, 1\} laskevaan järjestykseen.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3
Lajittele luettelo \{2, 3, 1\} laskevaan järjestykseen käyttäen Value.Compare-menetelmää.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
