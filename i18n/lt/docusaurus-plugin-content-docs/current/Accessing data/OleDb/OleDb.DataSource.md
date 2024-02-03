---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

Pateikia SQL lentelių ir rodinių lentelę iš OLE DB duomenų šaltinio.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Pateikia SQL lentelių ir rodinių lentelę iš OLE DB duomenų šaltinio, kurį nurodo jungimosi eilutė <code>connectionString</code>. <code>connectionString</code> gali būti tekstas arba ypatybės reikšmių porų įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Galima nurodyti pasirenkamą įrašo parametrą <code>options</code> norint nurodyti papildomas ypatybes. Įraše gali būti tokie laukai:    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>NavigationPropertyNameGenerator</code> : Funkcija, naudojama naršymo ypatybių pavadinimams kurti.</li><li><code>Query</code> : Pirminė SQL užklausa, naudojama duomenims nuskaityti. Jei užklausa pateikia kelis rezultatų rinkinius, bus rodomas tik pirmasis.</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>SqlCompatibleWindowsAuth</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.</li></ul>    Įrašo parametras nurodomas kaip, pvz., [option1 = value1, option2 = value2...] arba [Query = "select ..."].



## Category
Accessing data
