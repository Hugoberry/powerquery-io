---
title: Sql.Databases
---

# Sql.Databases


## Description

Pateikiama „SQL Server“ duomenų bazių lentelė.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

Pateikiama „SQL Server“ <code>server</code> duomenų bazių lentelė. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code>, kad būtų galima valdyti toliau pateiktas parinktis.    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li><li><code>MaxDegreeOfParallelism</code> : Skaičius, kuris nustato maxdop užklausos sąlygos reikšmę sugeneruotoje SQL užklausoje.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li><li><code>MultiSubnetFailover</code> : Loginė reikšmė („true“ / „false“), nustatanti ypatybės MultiSubnetFailover reikšmę jungimosi eilutėje (numatytoji reikšmė – „false“).</li><li><code>UnsafeTypeConversions</code> : Loginė (teisinga / klaidinga) reikšmė, kuri, jei yra teisinga, bando perduoti tipo konversijas, kurios galėjo nepavykti ir dėl kurių galėjo nepavykti įvykdyti visą užklausą. Nerekomenduojama bendram naudojimui.</li><li><code>ContextInfo</code> : Dvejetainė reikšmė, naudojama CONTEXT_INFO nustatyti prieš vykdant kiekvieną komandą.</li><li><code>OmitSRID</code> : Loginė (teisinga / klaidinga) reikšmė, kuri, jei yra teisinga, praleidžia SRID, kai kuriamas gerai žinomas tekstas iš geometrijos ir geografijos tipų.</li><li><code>EnableCrossDatabaseFolding</code> : Loginė (TRUE / FALSE) reikšmė, kuri, jei TRUE, leidžia užklausą perduoti tarp duomenų bazių, esančių tame pačiame serveryje. Numatytoji reikšmė yra FALSE.</li></ul>    Pavyzdžiui, įrašo parametras nurodytas kaip [option1 = value1, option2 = value2...].    <br />    SQL užklausos vykdymas serveryje nepalaikomas. Norint vykdyti SQL užklausą reikia naudoti <code>Sql.Database</code>.    



## Category
Accessing data
