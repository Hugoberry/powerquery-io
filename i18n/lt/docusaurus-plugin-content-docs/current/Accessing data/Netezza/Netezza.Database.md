---
title: Netezza.Database
---

# Netezza.Database


## Description

Importuoti duomenis iš „IBM Netezza“ duomenų bazės.


## Syntax

```powerquery
Netezza.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiama „Netezza“ lentelių, rodinių ir saugomų funkcijų iš „Netezza“ serverio duomenų bazės <code>database</code>, esančios serveryje <code>server</code>, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą, <code>options</code>, kad būtų galima valdyti šias parinktis:<ul>        <li><code>CreateNavigationProperties</code>: loginė reikšmė (true / false), nustatanti, ar sugeneruoti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė yra true)</li>        <li><code>HierarchicalNavigation</code>: loginė reikšmė (true / false), nurodanti, ar lenteles rodyti sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė yra false)</li>        <li><code>ConnectionTimeout</code>: trukmė, kontroliuojanti, kiek laiko laukti prieš nutraukiant bandymą užmegzti ryšį su serveriu. Numatytoji reikšmė priklauso nuo tvarkyklės.</li>        <li><code>CommandTimeout</code>: trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>NormalizeDatabaseName</code>: loginė reikšmė (true / false), nustatanti, ar normalizuoti duomenų bazės pavadinimą į didžiąsias raides, ar interpretuoti jį tiesiogiai (numatytoji reikšmė yra true).</li></ul>Įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Išvardyti „IBM Netezza“ projekto lenteles.
```powerquery
Netezza.Database("netezza:5480", "netezza_database")
```



