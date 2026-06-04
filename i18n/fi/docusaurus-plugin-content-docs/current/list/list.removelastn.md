---
title: List.RemoveLastN
---

# List.RemoveLastN


Palauttaa luettelon, joka poistaa määritetyn määrän elementtejä luettelon lopusta.


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Palauttaa luettelon, joka poistaa viimeiset `countOrCondition` elementtiä luettelon `list`lopusta. Jos `list` on alle `countOrCondition` elementtiä, palautetaan tyhjä luettelo.

-   Jos luku on määritetty, enintään niin monta kohdetta poistetaan.
-   Jos ehto määritetään, kaikki peräkkäiset vastaavat kohteet `list` lopussa poistetaan.
-   Jos tämä parametri on tyhjäarvoinen, vain yksi kohde poistetaan.


## Examples

### Example #1
Luo luettelo luettelosta \{1, 2, 3, 4, 5\} ilman viimeistä kolmea lukua.
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Luo luettelosta \{5, 4, 2, 6, 4\} luettelon, joka päättyy lukuun, joka on pienempi kuin 3.
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
