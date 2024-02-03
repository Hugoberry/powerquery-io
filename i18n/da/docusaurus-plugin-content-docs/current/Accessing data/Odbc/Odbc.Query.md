---
title: Odbc.Query
---

# Odbc.Query


## Description

Returnerer resultatet for kørsel af en oprindelig forespørgsel på en ODBC-datakilde.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Returnerer resultatet for kørsel af <code>query</code> med forbindelsesstrengen <code>connectionString</code> ved hjælp af ODBC. <code>connectionString</code> kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal. Der kan angives et valgfrit postparameter, <code>options</code>, for at angive yderligere egenskaber. Posten kan indeholde følgende felter:    <ul><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien er 15 sekunder.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>SqlCompatibleWindowsAuth</code> : En logisk v&#230;rdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardv&#230;rdien er true.</li></ul>


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
