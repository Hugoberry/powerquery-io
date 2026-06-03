---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Returnerar resultatet för en intern fråga som körs på en ADO.NET-datakälla.


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

Returnerar resultatet av att köra `query` med anslutningssträngen `connectionString` med ADO.NET-providern `providerName`. `connectionString` kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, `options`, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:

-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `SqlCompatibleWindowsAuth` : Ett logiskt (sant/falskt) som fastställer om alternativ för SQL Server-kompatibla anslutningssträngpar ska skapas för Windows-autentisering. Standardvärdet är sant.



## Category
Accessing data
