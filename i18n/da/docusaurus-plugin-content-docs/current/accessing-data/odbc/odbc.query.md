---
title: Odbc.Query
---

# Odbc.Query


Returnerer resultatet for kørsel af en oprindelig forespørgsel på en ODBC-datakilde.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Returnerer resultatet for kørsel af `query` med forbindelsesstrengen `connectionString` ved hjælp af ODBC. `connectionString` kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal. Der kan angives et valgfrit postparameter, `options`, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:

-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er 15 sekunder.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `SqlCompatibleWindowsAuth` : En logisk værdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardværdien er true.


## Examples

### Example #1
Returner resultatet af at køre en simpel forespørgsel mod den angivne forbindelsesstreng.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
