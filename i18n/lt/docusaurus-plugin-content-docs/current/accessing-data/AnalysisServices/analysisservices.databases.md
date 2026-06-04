---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Pateikiamos analizės paslaugų duomenų bazės, esančios konkrečiame pagrindiniame kompiuteryje.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Pateikiamos duomenų bazės, esančios analizės tarnybų egzemplioriuje `server`. Galima nurodyti pasirenkamą įrašo parametrą `options`, jei norima nurodyti papildomas ypatybes. Įrašas gali būti sudarytas iš šių laukų:

-   `TypedMeasureColumns` : Loginė reikšmė, nurodanti, ar kelių dimensijų arba lentelės modelyje nurodyti tipai bus naudojami pridėtų matų stulpelių tipams. Kai nustatyta „false“, tipas Skaičius bus naudojamas visuose matų stulpeliuose. Šios parinkties numatytoji reikšmė yra „false“.
-   `Culture` : Kultūros pavadinimas, nurodantis duomenų kultūrą. Jis atitinka jungimosi eilutės ypatybę Lokalės identifikatorius.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `SubQueries` : Skaičius (0, 1 arba 2), nustatantis ypatybės SubQueries reikšmę jungimosi eilutėje. Jis kontroliuoja papildomų pasirinkimų arba papildomų kubų apskaičiuotųjų narių veikimo būdą. (Numatytoji reikšmė – 2).
-   `Implementation`



## Category
Accessing data
