---
title: List.LastN
---

# List.LastN


Palauttaa luettelon määritetyn luettelon viimeisestä kohteesta tai kohteista. Voi vaihtoehtoisesti määrittää, montako arvoa palautetaan, tai ehdon.


## Syntax

```powerquery
List.LastN(
    list as list,
    optional countOrCondition as any
) as any
```


## Remarks

Palauttaa luettelon määritetyn luettelon viimeisestä kohteesta tai kohteista.

-   `list`: Tutkittava luettelo. Jos luettelo on tyhjä, palautetaan tyhjä luettelo.
-   `countOrCondition`: Tukee useiden kohteiden keräämistä tai kohteiden suodatusta (valinnainen). Vaikka tämä parametri on merkitty valinnaiseksi, virhe tapahtuu, jos arvoa ei anneta tai se on `tyhjä`. Tämä parametri voidaan määrittää kahdella tavalla:
    -   Jos luku on määritetty, enintään niin monta kohdetta palautetaan.
    -   Jos ehto on määritetty, palautetaan kaikki luettelon lopusta alkaen ehdon täyttävät kohteet. Kun jokin kohde ei täytä ehtoa, muita kohteita ei enää oteta huomioon.


## Examples

### Example #1
Selvitä luettelon \{3, 4, 5, -1, 7, 8, 2\} viimeinen arvo.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, 1)
```

Result: 
```powerquery
{2}
```


### Example #2
Selvitä luettelosta \{3, 4, 5, -1, 7, 8, 2\} viimeiset arvot, jotka ovat suurempia kuin 0.
```powerquery
List.LastN({3, 4, 5, -1, 7, 8, 2}, each _ > 0)
```

Result: 
```powerquery
{7, 8, 2}
```




## Category
List.Selection
