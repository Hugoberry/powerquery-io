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

Returnerer skemasamlingen for ADO.NET-datakilden med providernavnet <code>providerName</code> og forbindelsesstrengen <code>connectionString</code>. <code>connectionString</code> kan være tekst eller en post med parvise egenskabsværdier. Egenskabsværdier kan være enten tekst eller tal. Der kan angives en valgfri postparameter, <code>options</code>, til angivelse af yderligere egenskaber. Denne post kan indeholde følgende felter:    <ul><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>SqlCompatibleWindowsAuth</code> : En logisk v&#230;rdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardv&#230;rdien er true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
