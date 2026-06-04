---
title: AdoDotNet.Query
---

# AdoDotNet.Query


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


## Remarks

Pateikiamas `query` paleidimo rezultatas, kai jungimosi eilutė yra `connectionString` ir naudojamas ADO.NET teikimo įrankis `providerName`. `connectionString` gali būti ypatybės reikšmių porų tekstas arba įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras `options`. Įraše gali būti šie laukai:

-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `SqlCompatibleWindowsAuth` : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.



## Category
Accessing data
