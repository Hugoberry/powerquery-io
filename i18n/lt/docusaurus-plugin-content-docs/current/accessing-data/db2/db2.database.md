---
title: DB2.Database
---

# DB2.Database


Pateikiama SQL lentelių ir rodinių, pasiekiamų Db2 duomenų bazėje, lentelė.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Pateikiama SQL lentelių ir rodinių, pasiekiamų serveryje `server` esančios Db2 duomenų bazės egzemplioriuje, kurio pavadinimas `database`, lentelė . Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą `options`, kad būtų galima valdyti toliau pateiktas parinktis:

-   `CreateNavigationProperties` : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).
-   `NavigationPropertyNameGenerator` : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.
-   `Query` : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.
-   `HierarchicalNavigation` : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).
-   `Implementation` : Nurodo, kurį vidinės duomenų bazės teikėją naudoti. Tinkamos reikšmės yra: IBM ir „Microsoft“.
-   `BinaryCodePage` : CCSID (koduotų simbolių rinkinio identifikatorius) numeris, kurį naudojant Db2 FOR BIT dvejetainiai duomenys dekoduojami į simbolių eilutes. Taikoma, kai reikšmė Diegimas yra „Microsoft“. Nustatykite 0, kad išjungtumėte konvertavimą (numatytoji reikšmė). Nustatykite 1, kad būtų konvertuojama pagal duomenų bazės koduotę. Nustatykite kitą CCSID numerį, kad konvertuotumėte į programos koduotę.
-   `PackageCollection` : Nurodoma paketų kolekcijos eilutės reikšmė (numatytoji reikšmė yra NULLID), kad būtų įjungta galimybė naudoti bendrinamus paketus, kurių reikia norint apdoroti SQL sakinius. Taikoma, jei reikšmė Implementation yra „Microsoft“.
-   `UseDb2ConnectGateway` : Nurodo, ar ryšys užmegztas per „Db2 Connect“ šliuzą. Taikoma diegiant = „Microsoft“.

Pavyzdžiui, įrašo parametras nurodomas kaip \[option1 = value1, option2 = value2...\] arba \[Query = "select ..."\].



## Category
Accessing data
