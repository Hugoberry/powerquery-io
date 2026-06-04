---
title: List.MinN
---

# List.MinN


Palauttaa luettelon vähimmäisarvot. Palautettavien arvojen määrä tai suodatusehto voidaan määrittää.


## Syntax

```powerquery
List.MinN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Remarks

Palauttaa luettelon `list` vähimmäisarvot. Parametri `countOrCondition` määrittää palautettavien arvojen määrän tai suodatusehdon. Valinnainen parametri `comparisonCriteria` määrittää, miten luettelon arvoja verrataan.

-   `list`: Arvoluettelo.
-   `countOrCondition`: Jos määritetään luku, palautetaan enintään `countOrCondition` kohteen luettelo nousevassa järjestyksessä. Jos ehto määritetään, palautetaan luettelo kohteita, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. Jos tämä parametri on tyhjäarvo, palautetaan luettelon yksittäinen pienin arvo.
-   `comparisonCriteria`: *(Valinnainen)* Valinnainen `comparisonCriteria` -arvo voidaan määrittää luettelon kohteiden vertailutavan määrittämistä varten. Jos tämä parametri on tyhjäarvo, käytetään oletusvertailutoimintoa.


## Examples

### Example #1
Selvitä luettelon `{3, 4, 5, -1, 7, 8, 2}` viisi pienintä arvoa.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
