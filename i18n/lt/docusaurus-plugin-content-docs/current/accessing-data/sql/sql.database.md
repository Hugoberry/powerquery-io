---
title: Sql.Database
---

# Sql.Database


Pateikiama SQL lentelių, peržiūrų ir saugomų funkcijų iš SQL serverio duomenų bazės lentelė.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikiama SQL lentelių, rodinių ir saugomų funkcijų iš „SQL Server“ duomenų bazės `database`, esančios serveryje `server`, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu arba kableliu. Galima nurodyti pasirinktinį įrašo parametrą `options`, kad būtų galima valdyti toliau pateiktas parinktis:

-   `Query` : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.
-   `CreateNavigationProperties` : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).
-   `NavigationPropertyNameGenerator` : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.
-   `MaxDegreeOfParallelism` : Skaičius, kuris nustato maxdop užklausos sąlygos reikšmę sugeneruotoje SQL užklausoje.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `HierarchicalNavigation` : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).
-   `MultiSubnetFailover` : Loginė reikšmė („true“ / „false“), nustatanti ypatybės MultiSubnetFailover reikšmę jungimosi eilutėje (numatytoji reikšmė – „false“).
-   `UnsafeTypeConversions` : Loginė (teisinga / klaidinga) reikšmė, kuri, jei yra teisinga, bando perduoti tipo konversijas, kurios galėjo nepavykti ir dėl kurių galėjo nepavykti įvykdyti visą užklausą. Nerekomenduojama bendram naudojimui.
-   `ContextInfo` : Dvejetainė reikšmė, naudojama CONTEXT\_INFO nustatyti prieš vykdant kiekvieną komandą.
-   `OmitSRID` : Loginė (teisinga / klaidinga) reikšmė, kuri, jei yra teisinga, praleidžia SRID, kai kuriamas gerai žinomas tekstas iš geometrijos ir geografijos tipų.
-   `EnableCrossDatabaseFolding` : Loginė (TRUE / FALSE) reikšmė, kuri, jei TRUE, leidžia užklausą perduoti tarp duomenų bazių, esančių tame pačiame serveryje. Numatytoji reikšmė yra FALSE.

Pavyzdžiui, ryšio parametras nurodomas kaip \[option1 = value1, option2 = value2...\] arba \[Query = "select ..."\].



## Category
Accessing data
