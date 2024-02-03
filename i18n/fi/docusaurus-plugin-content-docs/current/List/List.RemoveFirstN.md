---
title: List.RemoveFirstN
---

# List.RemoveFirstN


## Description

Palauttaa luettelon, joka ohittaa määritetyn määrän elementtejä luettelon alussa.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

Palauttaa luettelon, joka poistaa luettelon <code>list</code> ensimmäisen elementin. Jos <code>list</code> on tyhjä, palautetaan tyhjä luettelo.Tämä funktio hyväksyy valinnaisen parametrin <code>countOrCondition</code>, jonka avulla tuetaan useiden arvojen poistoa alla luetellulla tavalla. <ul> <li>Jos luku määritetään, poistetaan enintään kyseinen määrä kohteita. </li> <li>Jos ehto määritetään, palautettu luettelo alkaa kohteen <code>list</code> ensimmäisellä elementillä, joka täyttää ehdon. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. </li> <li>Jos tämä parametri on tyhjäarvo, käytetään oletustoimintaa. </li> </ul>


## Examples

### Example #1 
Luo luettelo luettelosta \{1, 2, 3, 4, 5} ilman ensimmäistä kolmea lukua.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
Luo luettelosta \{5, 4, 2, 6, 1} luettelon, joka alkaa luvulla, joka on pienempi kuin 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
