---
title: Odbc.DataSource
---

# Odbc.DataSource


Returnerar en tabell med SQL-tabeller och vyer från ODBC-datakällan.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med SQL-tabeller och vyer från den ODBC-datakälla som har angetts av anslutningssträngen `connectionString`. `connectionString` kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, `options`, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:

-   `CreateNavigationProperties` : Ett logiskt värde (sant/falskt) som anger om navigeringsegenskaper ska genereras för returnerade värden eller inte (standard är sant).
-   `HierarchicalNavigation` : Ett logiskt värde (sant/falskt) som anger om du vill visa vilka tabeller som är grupperade efter schemanamn (standard är falskt).
-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är 15 sekunder.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `SqlCompatibleWindowsAuth` : Ett logiskt (sant/falskt) som fastställer om alternativ för SQL Server-kompatibla anslutningssträngpar ska skapas för Windows-autentisering. Standardvärdet är sant.


## Examples

### Example #1
Returnera SQL-tabeller och vyer från den angivna anslutningssträngen.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
