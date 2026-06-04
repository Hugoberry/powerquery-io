---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Pateikiama kelių dimensijų kubų arba lentelinių modelių lentelė iš analizės tarnybos duomenų bazės.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Serveryje `server` pateikiama kelių dimensijų kubų arba lentelinių modelių lentelė iš analizės tarnybos duomenų bazės `database`. Galima nurodyti pasirenkamą įrašo parametrą `options`, kad būtų galima valdyti šias parinktis:

-   `Query` : Pirminė MDX užklausa, naudojama duomenims nuskaityti.
-   `TypedMeasureColumns` : Loginė reikšmė, nurodanti, ar kelių dimensijų arba lentelės modelyje nurodyti tipai bus naudojami pridėtų matų stulpelių tipams. Kai nustatyta „false“, tipas Skaičius bus naudojamas visuose matų stulpeliuose. Šios parinkties numatytoji reikšmė yra „false“.
-   `Culture` : Kultūros pavadinimas, nurodantis duomenų kultūrą. Jis atitinka jungimosi eilutės ypatybę Lokalės identifikatorius.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `SubQueries` : Skaičius (0, 1 arba 2), nustatantis ypatybės SubQueries reikšmę jungimosi eilutėje. Jis kontroliuoja papildomų pasirinkimų arba papildomų kubų apskaičiuotųjų narių veikimo būdą. (Numatytoji reikšmė – 2).
-   `Implementation`



## Category
Accessing data
