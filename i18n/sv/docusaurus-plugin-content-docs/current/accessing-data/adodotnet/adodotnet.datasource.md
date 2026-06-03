---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Returnerar schemasamlingen för en ADO.NET-datakälla.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerar schemasamlingen för ADO.NET-datakällan med providernamnet `providerName` och anslutningssträngen `connectionString`. `connectionString` kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, `options`, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:

-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `SqlCompatibleWindowsAuth` : Ett logiskt (sant/falskt) som fastställer om alternativ för SQL Server-kompatibla anslutningssträngpar ska skapas för Windows-autentisering. Standardvärdet är sant.
-   `TypeMap`



## Category
Accessing data
