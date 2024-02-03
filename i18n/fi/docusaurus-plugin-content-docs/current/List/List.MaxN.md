---
title: List.MaxN
---

# List.MaxN


## Description

Palauttaa luettelon enimmäisarvot. Palautettavien arvojen määrä tai suodatusehto täytyy määrittää.


## Syntax

```powerquery
List.MaxN(
    list as list,
    countOrCondition as any,
    optional comparisonCriteria as any,
    optional includeNulls as logical
) as list
```


## Details

Palauttaa luettelon <code>list</code> enimmäisarvot.    Kun rivit on lajiteltu, valinnaisia parametreja voi määrittää, jotta tulosta suodatetaan lisää. Valinnainen parametri <code>countOrCondition</code> määrittää palautettavin arvojen määrän tai suodatusehdon. Valinnainen parametri <code>comparisonCriteria</code> määrittää, miten luettelon arvoja verrataan. <ul>        <li> <code>list</code>: arvojen luettelo.</li>        <li> <code>countOrCondition</code>: Jos luku määritetään, palautetaan enintään <code>countOrCondition</code> kohteen luettelo nousevassa järjestyksessä. Jos ehto määritetään, palautetaan luettelo kohteita, jotka täyttävät kyseisen ehdon aluksi. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida.</li><li><code>comparisonCriteria</code>: <i>(Valinnainen)</i> Valinnainen <code>comparisonCriteria</code>-arvo voidaan määrittää luettelon kohteiden vertailutavan määrittämistä varten. Jos tämä parametri on tyhjäarvo, käytetään oletusvertailutoimintoa. </li></ul>



## Category
List.Ordering
