---
title: Netezza.Database
---

# Netezza.Database


Importuoti duomenis iš „IBM Netezza“ duomenų bazės.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikiama „Netezza“ lentelių, rodinių ir saugomų funkcijų iš „Netezza“ serverio duomenų bazės `database`, esančios serveryje `server`, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą, `options`, kad būtų galima valdyti šias parinktis:

-   `CreateNavigationProperties`: loginė reikšmė (true / false), nustatanti, ar sugeneruoti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė yra true)
-   `HierarchicalNavigation`: loginė reikšmė (true / false), nurodanti, ar lenteles rodyti sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė yra false)
-   `ConnectionTimeout`: trukmė, kontroliuojanti, kiek laiko laukti prieš nutraukiant bandymą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `CommandTimeout`: trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `NormalizeDatabaseName`: loginė reikšmė (true / false), nustatanti, ar normalizuoti duomenų bazės pavadinimą į didžiąsias raides, ar interpretuoti jį tiesiogiai (numatytoji reikšmė yra true).

Įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Išvardyti „IBM Netezza“ projekto lenteles.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



