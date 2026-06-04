---
title: Sql.Databases
---

# Sql.Databases


Pateikiama „SQL Server“ duomenų bazių lentelė.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Pateikiama „SQL Server“ `server` duomenų bazių lentelė. Galima nurodyti pasirinktinį įrašo parametrą `options`, kad būtų galima valdyti toliau pateiktas parinktis:

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

Pavyzdžiui, įrašo parametras nurodytas kaip \[option1 = value1, option2 = value2...\].  
  
SQL užklausos vykdymas serveryje nepalaikomas. Norint vykdyti SQL užklausą reikia naudoti `Sql.Database`.



## Category
Accessing data
