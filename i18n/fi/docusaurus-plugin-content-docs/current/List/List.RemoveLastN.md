---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

Palauttaa luettelon, joka poistaa määritetyn määrän elementtejä luettelon lopusta.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Palauttaa luettelon, joka poistaa viimeiset <code>countOrCondition</code> elementtiä luettelon <code>list</code> lopusta. Jos luettelossa <code>list</code> on vähemmän kuin <code>countOrCondition</code> elementtiä, palautetaan tyhjä luettelo. <ul> <li>Jos luku määritetään, poistetaan enintään kyseinen määrä kohteita. </li> <li>Jos ehto määritetään, palautettu luettelo päättyy kohteen <code>list</code> ensimmäisellä ehdot täyttävällä elementillä lopusta alkaen. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. </li> <li>Jos tämä parametri on tyhjäarvo, vain yksi kohde poistetaan. </li> </ul>


## Examples

### Example #1 
Luo luettelo luettelosta \{1, 2, 3, 4, 5} ilman viimeistä kolmea lukua.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
Luo luettelosta \{5, 4, 2, 6, 4} luettelon, joka päättyy lukuun, joka on pienempi kuin 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
