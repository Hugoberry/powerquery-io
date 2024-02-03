---
title: List.Union
---

# List.Union


## Description

Palauttaa syötteestä löydettyjen luetteloarvojen yhdistämisen.


## Syntax

```powerquery
List.Union(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

Ottaa luetteloiden luettelon <code>lists</code>, yhdistää yksittäisten luetteloiden kohteet ja palauttaa ne tulosteluettelossa. Tuloksena palautettu luettelo sisältää kaikkien syöteluetteloiden kaikki kohteet.    Tämä toiminto säilyttää perinteisen kaksoiskappalesemantiikan, joten arvojen kaksoiskappaleet täsmätään osana Union-kohdetta.    Valinnainen laskutoimituksen ehtoarvo <code>equationCriteria</code> voidaan määrittää ohjaamaan samanlaisuustestausta. 


## Examples

### Example #1 
Luo yhdistäminen luettelosta \{1..5}, \{2..6}, \{3..7}.
```powerquery
List.Union({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6, 7}
```




## Category
List.Set operations
