---
title: Odbc.Query
---

# Odbc.Query


Returnerar resultatet för en intern fråga som körs på en ODBC-datakälla.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Returnerar resultatet av att köra `query` med anslutningssträngen `connectionString` med ODBC. `connectionString` kan vara text eller en post med egenskapsvärdepar. Egenskapsvärdena kan antingen vara text eller siffror. En valfri postparameter, `options`, kan anges för att specificera ytterligare egenskaper. Posten kan innehålla följande fält:

-   `ConnectionTimeout` : En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är 15 sekunder.
-   `CommandTimeout` : En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts. Standardvärdet är tio minuter.
-   `SqlCompatibleWindowsAuth` : Ett logiskt (sant/falskt) som fastställer om alternativ för SQL Server-kompatibla anslutningssträngpar ska skapas för Windows-autentisering. Standardvärdet är sant.


## Examples

### Example #1
Returnera resultatet av att köra en enkel fråga mot den angivna anslutningssträngen.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
