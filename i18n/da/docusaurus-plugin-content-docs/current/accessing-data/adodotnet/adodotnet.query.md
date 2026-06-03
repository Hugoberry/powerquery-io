---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Returnerer resultatet for kørsel af en oprindelig forespørgsel på en ADO.NET-datakilde.


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

Returnerer resultatet for kørsel af `query` med forbindelsesstrengen `connectionString` ved hjælp af ADO.NET-provideren `providerName`. `connectionString` kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal. Der kan angives en valgfri postparameter, `options`, til angivelse af yderligere egenskaber. Denne post kan indeholde følgende felter:

-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `SqlCompatibleWindowsAuth` : En logisk værdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardværdien er true.



## Category
Accessing data
