---
title: List.MinN
---

# List.MinN


## Description

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


## Details

Palauttaa luettelon vähimmäisarvot<code>list</code>.    Parametri <code>countOrCondition</code> määrittää palautettavien arvojen määrän tai suodatusehdon. Valinnainen parametri <code>comparisonCriteria</code> määrittää, miten luettelon arvoja verrataan. <ul>        <li> <code>list</code>: arvojen luettelo.</li>        <li> <code>countOrCondition</code>: jos luku määritetään, palautetaan enintään <code>countOrCondition</code> kohteen luettelo nousevassa järjestyksessä. Jos ehto määritetään, palautetaan luettelo kohteita, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. Jos tämä parametri on tyhjäarvo, palautetaan luettelon yksittäinen pienin arvo.</li><li><code>comparisonCriteria</code>: <i>(valinnainen)</i> valinnainen <code>comparisonCriteria</code>-arvo voidaan määrittää luettelon kohteiden vertailutavan määrittämistä varten. Jos tämä parametri on tyhjäarvo, käytetään oletusvertailutoimintoa. </li></ul>


## Examples

### Example #1 
Selvitä luettelon &lt;code&gt;\{3, 4, 5, -1, 7, 8, 2}&lt;/code&gt; viisi pienintä arvoa.
```powerquery
List.MinN({3, 4, 5, -1, 7, 8, 2}, 5)
```

Result: 
```powerquery
{-1, 2, 3, 4, 5}
```




## Category
List.Ordering
