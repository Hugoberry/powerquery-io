---
title: Odbc.Query
---

# Odbc.Query


Pateikiamas rezultatas paleidus prigimtinę užklausą ODBC duomenų šaltinyje.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Pateikiamas `query` paleidimo rezultatas, kai naudojama jungimosi eilutė `connectionString` ir ODBC. `connectionString` gali būti tekstas arba ypatybės reikšmių porų įrašas. Ypatybės reikšmės gali būti tekstas arba skaičiai. Norint nurodyti papildomas ypatybes, gali būti nurodytas pasirenkamas įrašo parametras `options`. Įraše gali būti šie laukai:

-   `ConnectionTimeout` : Trukmė, kontroliuojanti bandymo užmegzti ryšį su serveriu laiką prieš jį nutraukiant. Numatytoji reikšmė – 15 sek.
-   `CommandTimeout` : Trukmė, kontroliuojanti serverio užklausos vykdymo laiką prieš ją atšaukiant. Numatytoji reikšmė yra dešimt minučių.
-   `SqlCompatibleWindowsAuth` : Loginė reikšmė („true“ / „false“), nustatanti, ar pateikti su „SQL Server“ suderinamos jungimosi eilutės parinktis „Windows“ autentifikavimui. Numatytoji reikšmė – „true“.


## Examples

### Example #1
Paprastos užklausos paleidimo rezultato pateikimas pagal pateiktą jungimosi eilutę.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
