---
title: List.LastN
---

# List.LastN


## Description

Palauttaa luettelon viimeisen arvon.  Voi vaihtoehtoisesti määrittää, montako arvoa palautetaan, tai ehdon.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Details

Palauttaa luettelon <code>list</code> viimeisen kohteen. Jos luettelo on tyhjä, tapahtuu poikkeus. Tämä funktio hyväksyy valinnaisen parametrin <code>countOrCondition</code>, jonka avulla tuetaan useiden kohteiden keräämistä tai kohteiden suodattamista. <code>countOrCondition</code> voidaan määrittää kolmella tavalla: <ul>  <li>Jos luku määritetään, palautetaan enintään kyseinen määrä kohteita. </li>  <li>Jos ehto määritetään, palautetaan kaikki kohteet, jotka täyttävät kyseisen ehdon aluksi, alkaen luettelon lopusta. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää arvioida. </li>  <li>Jos tämä parametri on tyhjäarvo, palautetaan luettelon viimeinen kohde.</li> </ul>


## Examples

### Example #1 
Selvitä luettelon \{3, 4, 5, -1, 7, 8, 2} viimeinen arvo.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2 
Selvitä luettelosta \{3, 4, 5, -1, 7, 8, 2} viimeiset arvot, jotka ovat suurempia kuin 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
