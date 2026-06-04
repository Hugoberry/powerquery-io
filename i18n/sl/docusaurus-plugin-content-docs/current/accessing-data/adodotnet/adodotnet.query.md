---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Vrne rezultat izvajajoče se izvorne poizvedbe v viru podatkov ADO.NET.


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

Vrne rezultat izvajajoče se poizvedbe `query` z nizom povezave `connectionString`, ki uporablja ponudnika ADO.NET `providerName`. `connectionString` je lahko besedilo ali zapis s pari vrednosti lastnosti. Vrednosti lastnosti so lahko besedilo ali številka. Navedete lahko izbirni parameter zapisa `options`, s katerim določite dodatne lastnosti. Zapis lahko vsebuje ta polja:

-   `CommandTimeout` : Trajanje, ki nadzoruje, koliko časa se lahko izvaja poizvedba na strani strežnika, preden je preklicana. Privzeta vrednost je deset minut.
-   `SqlCompatibleWindowsAuth` : Logična vrednost (true/false), ki določa, ali je treba za preverjanje pristnosti sistema Windows ustvariti možnosti niza povezave, ki so združljive s strežnikom SQL Server. Privzeta vrednost je"true".



## Category
Accessing data
