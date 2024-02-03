---
title: List.FirstN
---

# List.FirstN


## Description

Palauttaa luettelon ensimmäisen kohdejoukon määrittämällä, montako kohdetta palautetaan, tai ehdon.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Details

 <ul>  <li>Jos luku määritetään, palautetaan enintään kyseinen määrä kohteita. </li>  <li>Jos ehto määritetään, palautetaan kaikki kohteet, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. </li> </ul>


## Examples

### Example #1 
Selvitä luettelosta \{3, 4, 5, -1, 7, 8, 2} alkuarvot, jotka ovat suurempia kuin 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
