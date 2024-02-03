---
title: PostgreSQL.Database
---

# PostgreSQL.Database


## Description

Pateikiama SQL lentelių ir peržiūrų, pasiekiamų „PostgreSQL“ duomenų bazėje, lentelė.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiama SQL lentelių ir rodinių, pasiekiamų serveryje <code>server</code> esančiame „PostgreSQL“ duomenų bazės egzemplioriuje, kurio pavadinimas <code>database</code>, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code>, kad būtų galima valdyti toliau pateiktas parinktis.    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li><li><code>Query</code> : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li></ul>    Pavyzdžiui, įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...] arba [Query = "select ..."].    



## Category
Accessing data
