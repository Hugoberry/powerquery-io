---
title: Access.Database
---

# Access.Database


Pateikiama „Access“ duomenų bazės struktūrinė pateiktis.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Pateikiamas struktūrinis „Access“ duomenų bazės `database` atvaizdavimas. Galima nurodyti pasirenkamą įrašo parametrą `options`, kad būtų galima valdyti šias parinktis:

-   `CreateNavigationProperties` : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).
-   `NavigationPropertyNameGenerator` : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.

Pavyzdžiui, įrašo parametras nurodytas kaip \[option1 = value1, option2 = value2...\].



## Category
Accessing data
