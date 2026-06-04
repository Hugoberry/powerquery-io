---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Pateikiamas ADO.NET duomenų šaltinio schemų rinkinys.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Pateikiamas ADO.NET duomenų šaltinio schemų rinkinys su teikimo įrankio pavadinimu `providerName` ir jungimosi eilute `connectionString`. `connectionString` gali būti ypatybės reikšmių porų tekstas arba įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras `options`. Įraše gali būti šie laukai:

-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `SqlCompatibleWindowsAuth` : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.
-   `TypeMap`



## Category
Accessing data
