---
title: SapHana.Database
---

# SapHana.Database


Pateikiami paketai SAP HANA duomenų bazėje.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Pateikiama kelių dimensijų paketų iš SAP HANA duomenų bazės `server` lentelė. Galima nurodyti pasirinktinį įrašo parametrą `options` šioms parinktims valdyti:

-   `Query` : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.
-   `Distribution` : SapHanaDistribution, nustatantis ypatybės Paskirstymas reikšmę jungimosi eilutėje. Sakinio kelvada – tai tinkamo paskirstytosios sistemos serverio mazgo įvertinimo būdas prieš sakinio vykdymą. Numatytoji reikšmė yra SapHanaDistribution.All.
-   `Implementation` : Nurodomas naudotinos „SAP Hana“ jungties diegimas.
-   `EnableColumnBinding` : Iškviečiant duomenis kintamieji susiejami su SAP Hana rezultatų rinkinio stulpeliais. Gali pagerinti veikimą, kai atminties naudojimas šiek tiek didesnis. Numatytoji reikšmė yra „false“.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė – 15 sek.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.



## Category
Accessing data
