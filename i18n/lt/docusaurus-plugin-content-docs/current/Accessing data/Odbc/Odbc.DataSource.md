---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Iš ODBC duomenų šaltinio pateikiama SQL lentelių ir rodinių lentelė. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Iš ODBC duomenų šaltinio, kurį nurodo jungimosi eilutė <code>connectionString</code>, pateikiama SQL lentelių ir rodinių lentelė. <code>connectionString</code> gali būti tekstas arba ypatybių reikšmių porų įrašas. Ypatybių reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>CreateNavigationProperties</code> : Loginė reikšmė („true“ / „false“), nurodanti, ar kurti pateiktų reikšmių naršymo ypatybes (numatytoji reikšmė – „true“).</li><li><code>HierarchicalNavigation</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar rodyti lenteles, sugrupuotas pagal jų schemų pavadinimus (numatytoji reikšmė – „false“).</li><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė – 15 sek.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>SqlCompatibleWindowsAuth</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.</li></ul>


## Examples

### Example #1 
SQL lentelių ir rodinių pateikimas naudojant pateiktas jungimosi eilutes.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
