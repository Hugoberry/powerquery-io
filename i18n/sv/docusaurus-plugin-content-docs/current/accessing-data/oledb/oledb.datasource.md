---
title: OleDb.DataSource
---

# OleDb.DataSource


Returnerar en tabell med SQL-tabeller och -vyer från OLE DB-datakällan.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller och vyer från den OLE DB datakälla som anges av anslutningssträngen `connectionString`. `connectionString` kan vara text eller en post med egenskapsvärdepar. Egenskapsvärden kan antingen vara text eller siffror. Parameter för valfri post, `options`, kan tillhandahållas för ytterligare egenskaper. Posten kan innehålla följande fält:

-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger om navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `NavigationPropertyNameGenerator` : En funktion som används för att skapa namn för navigeringsegenskaper.
-   `Query` : En intern SQL-fråga som används för att hämta data. Om frågan producerar flera resultatuppsättningar, så returneras enbart den första.
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om tabellerna ska visas grupperade efter sina schemanamn (standard är sant).
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är drivrutinsberoende.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `SqlCompatibleWindowsAuth` : Ett logiskt (sant/falskt) som fastställer om alternativ för SQL Server-kompatibla anslutningssträngpar ska skapas för Windows-autentisering. Standardvärdet är sant.

Postparametern anges t.ex. som \[option1 = value1, option2 = value2...\] or \[Query = "select ..."\].



## Category
Accessing data
