---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Egy natív lekérdezés egy ADO.NET-adatforráson való futtatásának eredményét adja vissza.


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

A(z) `query` a(z) `connectionString` kapcsolati sztringgel és a(z) `providerName` ADO.NET-szolgáltató használatával való futtatásának eredményét adja vissza. A(z) `connectionString` szöveg vagy tulajdonságérték-párok rekordja lehet. A tulajdonságérték szöveg vagy szám lehet. A(z) `options` elhagyható rekordparaméterrel további tulajdonságok határozhatók meg. A rekord a következő mezőket tartalmazhatja:

-   `CommandTimeout` : Egy időtartam, amely azt vezérli, hogy a kiszolgálóoldali lekérdezés mennyi ideig futhat, mielőtt megszakadna. Az alapértelmezett érték tíz perc.
-   `SqlCompatibleWindowsAuth` : Logikai (igaz/hamis) érték, amely meghatározza, hogy létrejöjjenek-e SQL Server-kompatibilis kapcsolatisztring-beállítások a Windows-hitelesítéshez. Az alapértelmezett érték true (igaz).



## Category
Accessing data
