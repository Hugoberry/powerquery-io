---
title: List.Skip
---

# List.Skip


Palauttaa luettelon, joka ohittaa määritetyn määrän elementtejä luettelon alussa.


## Syntax

```powerquery
List.Skip(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

Palauttaa luettelon, joka ohittaa luettelon `list`ensimmäisen elementin. Jos `list` on tyhjä luettelo, palautetaan tyhjä luettelo. Tämä funktio käyttää valinnaista parametria `countOrCondition`, joka tukee useiden arvojen ohittamista alla kuvatulla tavalla.

-   Jos luku on määritetty, enintään niin monta kohdetta ohitetaan.
-   Jos ehto määritetään, kaikki peräkkäiset vastaavat kohteet `list` alussa ohitetaan.
-   Jos tämä parametri on tyhjäarvoinen, oletustoiminta havaitaan.


## Examples

### Example #1
Luo luettelo luettelosta \{1, 2, 3, 4, 5\} ilman ensimmäistä kolmea lukua.
```powerquery
List.Skip({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
Luo luettelosta \{5, 4, 2, 6, 1\} luettelon, joka alkaa luvulla, joka on pienempi kuin 3.
```powerquery
List.Skip({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Selection
