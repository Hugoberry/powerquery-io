---
title: Oracle.Database
---

# Oracle.Database


Pateikiama SQL lentelių ir peržiūrų iš „Oracle Database“ lentelė.


## Syntax

```powerquery
Oracle.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Pateikiama SQL lentelių ir rodinių iš serveryje `server` esančios „Oracle“ duomenų bazės lentelė. Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą `options`, kad būtų galima valdyti toliau pateiktas parinktis:

-   `CreateNavigationProperties` : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).
-   `NavigationPropertyNameGenerator` : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.
-   `Query` : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `HierarchicalNavigation` : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).

Pavyzdžiui, įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\] arba \[Query = "select ..."\].



## Category
Accessing data
