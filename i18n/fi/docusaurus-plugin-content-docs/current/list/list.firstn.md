---
title: List.FirstN
---

# List.FirstN


Palauttaa luettelon ensimmäisen kohdejoukon määrittämällä, montako kohdetta palautetaan, tai ehdon.


## Syntax

```powerquery
List.FirstN(
    list as list,
    countOrCondition as any
) as any
```


## Remarks

-   Jos luku määritetään, palautetaan enintään kyseinen määrä kohteita.
-   Jos ehto määritetään, palautetaan kaikki kohteet, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida.


## Examples

### Example #1
Selvitä luettelosta \{3, 4, 5, -1, 7, 8, 2\} alkuarvot, jotka ovat suurempia kuin 0.
```powerquery
List.FirstN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Selection
