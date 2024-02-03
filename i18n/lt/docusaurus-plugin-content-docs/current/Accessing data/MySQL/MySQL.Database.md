---
title: MySQL.Database
---

# MySQL.Database


## Description

Pateikiama SQL lentelių, peržiūrų ir saugomų skaliarinių funkcijų, pasiekiamų „MySQL“ duomenų bazėje, lentelė.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiama SQL lentelių ir saugomų skaliarinių funkcijų, pasiekiamų serveryje <code>server</code> esančiame „MySQL“ duomenų bazės egzemplioriuje, kurio pavadinimas <code>database</code>, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code>, kad būtų galima valdyti toliau pateiktas parinktis.    <ul><li><code>Encoding</code> : TextEncoding reikšmė, kuri nurodo simbolių rinkinį, naudojamą užkoduoti visoms į serverį siunčiamoms užklausoms (numatytoji reikšmė yra null).</li><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li><li><code>Query</code> : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>TreatTinyAsBoolean</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti tinyint stulpelius serveryje kaip logines reikšmes. Numatytoji reikšmė yra „true“.</li><li><code>OldGuids</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar char(36) stulpeliai (jei nustatyta reikšmė „false“) arba binary(16) stulpeliai (jei nustatyta reikšmė „true“) bus laikomi GUID. Numatytoji reikšmė yra „false“.</li><li><code>ReturnSingleDatabase</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti visas duomenų bazių lenteles (jei nustatyta reikšmė „false“), ar pateikti nurodytos duomenų bazės lenteles ir rodinius (jei nustatyta reikšmė „true“). Numatytoji reikšmė yra „false“.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li></ul>    Pavyzdžiui, įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...] arba [Query = "select ..."].    



## Category
Accessing data
