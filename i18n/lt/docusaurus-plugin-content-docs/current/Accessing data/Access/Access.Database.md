---
title: Access.Database
---

# Access.Database


## Description

Pateikiama „Access“ duomenų bazės struktūrinė pateiktis.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Details

Pateikiamas struktūrinis „Access“ duomenų bazės <code>database</code> atvaizdavimas. Galima nurodyti pasirenkamą įrašo parametrą <code>options</code>, kad būtų galima valdyti šias parinktis:    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li></ul>    Pavyzdžiui, įrašo parametras nurodytas kaip [option1 = value1, option2 = value2...].



## Category
Accessing data
