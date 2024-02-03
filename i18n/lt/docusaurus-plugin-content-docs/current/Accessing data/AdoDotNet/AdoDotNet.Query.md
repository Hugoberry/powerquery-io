---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

Pateikiamas pirminės užklausos paleidimo naudojant ADO.NET duomenų šaltinį rezultatas.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Pateikiamas <code>query</code> paleidimo rezultatas, kai jungimosi eilutė yra <code>connectionString</code> ir naudojamas ADO.NET teikimo įrankis <code>providerName</code>. <code>connectionString</code> gali būti ypatybės reikšmių porų tekstas arba įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>SqlCompatibleWindowsAuth</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.</li></ul>



## Category
Accessing data
