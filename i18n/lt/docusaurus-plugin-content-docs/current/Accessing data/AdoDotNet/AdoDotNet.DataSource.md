---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Pateikiamas ADO.NET duomenų šaltinio schemų rinkinys.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Pateikiamas ADO.NET duomenų šaltinio schemų rinkinys su teikimo įrankio pavadinimu <code>providerName</code> ir jungimosi eilute <code>connectionString</code>. <code>connectionString</code> gali būti ypatybės reikšmių porų tekstas arba įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>SqlCompatibleWindowsAuth</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
