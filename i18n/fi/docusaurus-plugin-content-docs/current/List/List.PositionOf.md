---
title: List.PositionOf
---

# List.PositionOf


## Description

Palauttaa luettelon arvon siirtymän tai siirtymät.


## Syntax

```powerquery
List.PositionOf(
    list as list,
    value as any,
    optional occurrence as Occurrence.Type,
    optional equationCriteria as any
) as any
```


## Details

Palauttaa siirtymän, jossa arvo <code>value</code> on luettelossa <code>list</code>. Palauttaa arvon -1, jos arvoa ei ole.    Valinnainen esiintymäparametri <code>occurrence</code> voidaan määrittää.<ul>   <li><code>occurrence</code>: enimmäismäärä esiintymiä, jotka voidaan raportoida.</li></ul>


## Examples

### Example #1 
Selvitä luettelossa \{1, 2, 3} oleva sijainti, jossa arvo 3 esiintyy.
```powerquery
List.PositionOf({1, 2, 3}, 3)
```

Result: 
```powerquery
2
```




## Category
List.Membership functions
