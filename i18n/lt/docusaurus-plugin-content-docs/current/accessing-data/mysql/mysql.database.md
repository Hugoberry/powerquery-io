---
title: MySQL.Database
---

# MySQL.Database


Pateikiama SQL lentelių, peržiūrų ir saugomų skaliarinių funkcijų, pasiekiamų „MySQL“ duomenų bazėje, lentelė.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikiama SQL lentelių ir saugomų skaliarinių funkcijų, pasiekiamų serveryje `server` esančiame „MySQL“ duomenų bazės egzemplioriuje, kurio pavadinimas `database`, lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą `options`, kad būtų galima valdyti toliau pateiktas parinktis:

-   `Encoding` : TextEncoding reikšmė, kuri nurodo simbolių rinkinį, naudojamą užkoduoti visoms į serverį siunčiamoms užklausoms (numatytoji reikšmė yra null).
-   `CreateNavigationProperties` : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).
-   `NavigationPropertyNameGenerator` : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.
-   `Query` : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `TreatTinyAsBoolean` : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti tinyint stulpelius serveryje kaip logines reikšmes. Numatytoji reikšmė yra „true“.
-   `OldGuids` : Loginė reikšmė („true“ / „false“), nustatanti, ar char(36) stulpeliai (jei nustatyta reikšmė „false“) arba binary(16) stulpeliai (jei nustatyta reikšmė „true“) bus laikomi GUID. Numatytoji reikšmė yra „false“.
-   `ReturnSingleDatabase` : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti visas duomenų bazių lenteles (jei nustatyta reikšmė „false“), ar pateikti nurodytos duomenų bazės lenteles ir rodinius (jei nustatyta reikšmė „true“). Numatytoji reikšmė yra „false“.
-   `HierarchicalNavigation` : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).

Pavyzdžiui, įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\] arba \[Query = "select ..."\].



## Category
Accessing data
