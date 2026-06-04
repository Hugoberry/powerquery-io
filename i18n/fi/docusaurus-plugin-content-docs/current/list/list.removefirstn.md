---
title: List.RemoveFirstN
---

# List.RemoveFirstN


Palauttaa luettelon, joka ohittaa määritetyn määrän elementtejä luettelon alussa.


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Palauttaa luettelon, joka poistaa luettelon `list`ensimmäisen elementin. Jos `list` on tyhjä luettelo, palautetaan tyhjä luettelo. Tämä funktio käyttää valinnaista parametria, `countOrCondition`, tukemaan useiden arvojen poistamista alla kuvatulla tavalla.

-   Jos luku on määritetty, enintään niin monta kohdetta poistetaan.
-   Jos ehto määritetään, kaikki peräkkäiset vastaavat kohteet `list` alussa poistetaan.
-   Jos tämä parametri on tyhjäarvoinen, oletustoiminta havaitaan.


## Examples

### Example #1
Luo luettelo luettelosta \{1, 2, 3, 4, 5\} ilman ensimmäistä kolmea lukua.
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Luo luettelosta \{5, 4, 2, 6, 1\} luettelon, joka alkaa luvulla, joka on pienempi kuin 3.
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
