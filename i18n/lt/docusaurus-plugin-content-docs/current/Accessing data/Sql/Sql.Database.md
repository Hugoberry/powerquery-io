---
title: Sql.Database
---

# Sql.Database


## Description

Pateikiama SQL lentelių, peržiūrų ir saugomų funkcijų iš SQL serverio duomenų bazės lentelė.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiama SQL lentelių, rodinių ir saugomų funkcijų iš „SQL Server“ duomenų bazės <code>database</code>, esančios serveryje <code>server</code>, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu arba kableliu. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code>, kad būtų galima valdyti toliau pateiktas parinktis.    <ul><li><code>Query</code> : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.</li><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li><li><code>MaxDegreeOfParallelism</code> : Skaičius, kuris nustato maxdop užklausos sąlygos reikšmę sugeneruotoje SQL užklausoje.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li><li><code>MultiSubnetFailover</code> : Loginė reikšmė („true“ / „false“), nustatanti ypatybės MultiSubnetFailover reikšmę jungimosi eilutėje (numatytoji reikšmė – „false“).</li><li><code>UnsafeTypeConversions</code> : Loginė (teisinga / klaidinga) reikšmė, kuri, jei yra teisinga, bando perduoti tipo konversijas, kurios galėjo nepavykti ir dėl kurių galėjo nepavykti įvykdyti visą užklausą. Nerekomenduojama bendram naudojimui.</li><li><code>ContextInfo</code> : Dvejetainė reikšmė, naudojama CONTEXT_INFO nustatyti prieš vykdant kiekvieną komandą.</li><li><code>OmitSRID</code> : Loginė (teisinga / klaidinga) reikšmė, kuri, jei yra teisinga, praleidžia SRID, kai kuriamas gerai žinomas tekstas iš geometrijos ir geografijos tipų.</li><li><code>EnableCrossDatabaseFolding</code> : Loginė (TRUE / FALSE) reikšmė, kuri, jei TRUE, leidžia užklausą perduoti tarp duomenų bazių, esančių tame pačiame serveryje. Numatytoji reikšmė yra FALSE.</li></ul>    Pavyzdžiui, ryšio parametras nurodomas kaip [option1 = value1, option2 = value2...] arba [Query = "select ..."].    



## Category
Accessing data
