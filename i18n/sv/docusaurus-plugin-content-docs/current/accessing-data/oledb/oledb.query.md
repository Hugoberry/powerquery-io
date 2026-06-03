---
title: OleDb.Query
---

# OleDb.Query


Returnerar resultatet för en intern fråga som körs på en OLE DB-datakälla.


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Returnerar resultatet av att köra `query` med anslutningssträngen `connectionString` med OLE DB. `connectionString` kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, `options`, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:

-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `SqlCompatibleWindowsAuth` : Ett logiskt (sant/falskt) som fastställer om alternativ för SQL Server-kompatibla anslutningssträngpar ska skapas för Windows-autentisering. Standardvärdet är sant.



## Category
Accessing data
