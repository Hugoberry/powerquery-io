---
title: DB2.Database
---

# DB2.Database


## Description

Pateikiama SQL lentelių ir rodinių, pasiekiamų Db2 duomenų bazėje, lentelė.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Pateikiama SQL lentelių ir rodinių, pasiekiamų serveryje <code>server</code> esančios Db2 duomenų bazės egzemplioriuje, kurio pavadinimas <code>database</code>, lentelė . Pasirinktinai kartu su serveriu galima nurodyti prievadą, atskiriant juos dvitaškiu. Galima nurodyti pasirinktinį įrašo parametrą <code>options</code>, kad būtų galima valdyti toliau pateiktas parinktis.    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li><li><code>Query</code> : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li><li><code>Implementation</code> : Nurodo, kurį vidinės duomenų bazės teikėją naudoti. Tinkamos reikšmės yra: IBM ir „Microsoft“.</li><li><code>BinaryCodePage</code> : CCSID (koduotų simbolių rinkinio identifikatorius) numeris, kurį naudojant Db2 FOR BIT dvejetainiai duomenys dekoduojami į simbolių eilutes. Taikoma, kai reikšmė Diegimas yra „Microsoft“. Nustatykite 0, kad išjungtumėte konvertavimą (numatytoji reikšmė). Nustatykite 1, kad būtų konvertuojama pagal duomenų bazės koduotę. Nustatykite kitą CCSID numerį, kad konvertuotumėte į programos koduotę.</li><li><code>PackageCollection</code> : Nurodoma paketų kolekcijos eilutės reikšmė (numatytoji reikšmė yra NULLID), kad būtų įjungta galimybė naudoti bendrinamus paketus, kurių reikia norint apdoroti SQL sakinius. Taikoma, jei reikšmė Implementation yra „Microsoft“.</li><li><code>UseDb2ConnectGateway</code> : Nurodo, ar ryšys užmegztas per „Db2 Connect“ šliuzą. Taikoma diegiant = „Microsoft“.</li></ul>    Pavyzdžiui, įrašo parametras nurodomas kaip [option1 = value1, option2 = value2...] arba [Query = "select ..."].    



## Category
Accessing data
