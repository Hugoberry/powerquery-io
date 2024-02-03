---
title: List.PositionOfAny
---

# List.PositionOfAny


## Description

Palauttaa luettelon arvon ensimmäisen siirtymän.


## Syntax

```powerquery
List.PositionOfAny(
    list as list,
    values as list,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Palauttaa luettelon <code>values</code> arvon ensimmäisen esiintymän siirtymän luettelossa <code>list</code>. Palauttaa arvon -1, jos yhtään esiintymää ei löydy.     Valinnainen esiintymäparametri <code>occurrence</code> voidaan määrittää.<ul>   <li><code>occurrence</code>: enimmäismäärä esiintymiä, jotka voidaan palauttaa.</li></ul>


## Examples

### Example #1 
Selvitä luettelossa \{1, 2, 3} oleva ensimmäinen sijainti, jossa arvo 2 tai 3 esiintyy.
```powerquery
List.PositionOfAny({1, 2, 3}, {2, 3})
```

Result: 
```powerquery
1
```




## Category
List.Membership functions
