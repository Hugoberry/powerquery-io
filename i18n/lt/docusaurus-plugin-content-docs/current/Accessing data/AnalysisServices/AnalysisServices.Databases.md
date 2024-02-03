---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


## Description

Pateikiamos analizės paslaugų duomenų bazės, esančios konkrečiame pagrindiniame kompiuteryje.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Pateikiamos duomenų bazės, esančios analizės tarnybų egzemplioriuje <code>server</code>. Galima nurodyti pasirenkamą įrašo parametrą <code>options</code>, jei norima nurodyti papildomas ypatybes. Įrašas gali būti sudarytas iš šių laukų:    <ul><li><code>TypedMeasureColumns</code> : Loginė reikšmė, nurodanti, ar kelių dimensijų arba lentelės modelyje nurodyti tipai bus naudojami pridėtų matų stulpelių tipams. Kai nustatyta „false“, tipas Skaičius bus naudojamas visuose matų stulpeliuose. Šios parinkties numatytoji reikšmė yra „false“.</li><li><code>Culture</code> : Kultūros pavadinimas, nurodantis duomenų kultūrą. Jis atitinka jungimosi eilutės ypatybę Lokalės identifikatorius.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>SubQueries</code> : Skaičius (0, 1 arba 2), nustatantis ypatybės SubQueries reikšmę jungimosi eilutėje. Jis kontroliuoja papildomų pasirinkimų arba papildomų kubų apskaičiuotųjų narių veikimo būdą. (Numatytoji reikšmė – 2).</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
