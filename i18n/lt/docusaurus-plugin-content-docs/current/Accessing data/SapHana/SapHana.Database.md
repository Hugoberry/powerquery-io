---
title: SapHana.Database
---

# SapHana.Database


## Description

Pateikiami paketai SAP HANA duomenų bazėje.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Pateikiama kelių dimensijų paketų iš SAP HANA duomenų bazės <code>server</code> lentelė. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code> šioms parinktims valdyti:    <ul><li><code>Query</code> : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.</li><li><code>Distribution</code> : SapHanaDistribution, nustatantis ypatybės Paskirstymas reikšmę jungimosi eilutėje. Sakinio kelvada – tai tinkamo paskirstytosios sistemos serverio mazgo įvertinimo būdas prieš sakinio vykdymą. Numatytoji reikšmė yra SapHanaDistribution.All.</li><li><code>Implementation</code> : Nurodomas naudotinos „SAP Hana“ jungties diegimas.</li><li><code>EnableColumnBinding</code> : Iškviečiant duomenis kintamieji susiejami su SAP Hana rezultatų rinkinio stulpeliais. Gali pagerinti veikimą, kai atminties naudojimas šiek tiek didesnis. Numatytoji reikšmė yra „false“.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė – 15 sek.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li></ul>    



## Category
Accessing data
