---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

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


## Details

Returnerer resultatet for kørsel af <code>query</code> med forbindelsesstrengen <code>connectionString</code> ved hjælp af ADO.NET-provideren <code>providerName</code>. <code>connectionString</code> kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal. Der kan angives en valgfri postparameter, <code>options</code>, til angivelse af yderligere egenskaber. Denne post kan indeholde følgende felter:    <ul><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>SqlCompatibleWindowsAuth</code> : En logisk v&#230;rdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardv&#230;rdien er true.</li></ul>



## Category
Accessing data
