---
title: List.Sort
---

# List.Sort


## Description

Lajittelee tietoluettelon määritettyjen ehtojen perusteella.


## Syntax

```powerquery
List.Sort(
    list as list,
    optional comparisonCriteria as any
) as list
```


## Details

Lajittelee tietoluettelo <code>list</code> määritettyjen valinnaisten ehtojen mukaisesti.    Vertailuehdoksi voidaan määrittää valinnainen parametri <code>comparisonCriteria</code>. Tämä voi vaatia seuraavia arvoja:    <ul>    <li> Jos haluat hallita järjestystä, vertailuehto voi olla Order enum -arvo. (<code>Order.Descending</code>, <code>Order.Ascending</code>). </li>    <li> Lajitteluun käytettävän avaimen laskemista varten voidaan käyttää yhden argumentin funktiota. </li>    <li> Voit valita sekä avaimen että hallintajärjestyksen. Vertailuehto voi olla avaimen ja järjestyksen sisältävä luettelo (<code>\{each 1 / _, Order.Descending}</code>). </li>    <li> Vertailua voi hallita täysin käyttämällä kahden argumentin funktiota. Tämä funktio välittää luettelon kaksi kohdetta (mitkä tahansa kaksi kohdetta missä tahansa järjestyksessä). Funktion tulee palauttaa jokin seuraavista arvoista:        <ul>            <li> <code>-1</code>: Ensimmäinen kohde on pienempi kuin toinen kohde.</li>            <li> <code>0</code>: Kohteet ovat yhtä suuria.</li>            <li> <code>1</code>: Ensimmäinen kohde on suurempi kuin toinen kohde.</li>        </ul>        Value.Compare on menetelmä, jota voidaan käyttää tämän logiikan delegoinnissa. </li>    </ul>


## Examples

### Example #1 
Lajittele luettelo \{2, 3, 1}.
```powerquery
List.Sort({2, 3, 1})
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Lajittele luettelo \{2, 3, 1} laskevaan järjestykseen.
```powerquery
List.Sort({2, 3, 1}, Order.Descending)
```

Result: 
```powerquery
{3, 2, 1}
```


### Example #3 
Lajittele luettelo \{2, 3, 1} laskevaan järjestykseen käyttäen Value.Compare-menetelmää.
```powerquery
List.Sort({2, 3, 1}, (x, y) => Value.Compare(1/x, 1/y))
```

Result: 
```powerquery
{3, 2, 1}
```




## Category
List.Ordering
