---
title: OleDb.Query
---

# OleDb.Query


## Description

Pateikiamas rezultatas paleidus prigimtinę užklausą OLE DB duomenų šaltinyje.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Pateikiamas <code>query</code> paleidimo rezultatas, kai naudojama jungimosi eilutė <code>connectionString</code> ir OLE DB. <code>connectionString</code> gali būti tekstas arba ypatybės reikšmių porų įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras <code>options</code>. Įraše gali būti šie laukai:    <ul><li><code>ConnectionTimeout</code> : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė priklauso nuo tvarkyklės.</li><li><code>CommandTimeout</code> : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.</li><li><code>SqlCompatibleWindowsAuth</code> : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.</li></ul>



## Category
Accessing data
