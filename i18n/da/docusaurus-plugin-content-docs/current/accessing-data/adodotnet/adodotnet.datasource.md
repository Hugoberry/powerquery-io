---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Returnerer skemasamlingen for en ADO.NET-datakilde.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerer skemasamlingen for ADO.NET-datakilden med providernavnet `providerName` og forbindelsesstrengen `connectionString`. `connectionString` kan være tekst eller en post med parvise egenskabsværdier. Egenskabsværdier kan være enten tekst eller tal. Der kan angives en valgfri postparameter, `options`, til angivelse af yderligere egenskaber. Denne post kan indeholde følgende felter:

-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `SqlCompatibleWindowsAuth` : En logisk værdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardværdien er true.
-   `TypeMap`



## Category
Accessing data
