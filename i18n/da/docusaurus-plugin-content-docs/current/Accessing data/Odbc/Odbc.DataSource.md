---
title: Odbc.DataSource
---

# Odbc.DataSource


## Description

Returnerer en tabel med SQL-tabeller og -visninger fra ODBC-data kilden. 


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

Returnerer en tabel med SQL-tabeller og -visninger fra den ODBC-datakilde, der er angivet af forbindelsesstrengen <code>connectionString</code>. <code>connectionString</code> kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være tekst eller tal. Der kan angives et valgfrit postparameter, <code>options</code>, til angivelse af yderligere egenskaber. Denne post kan indeholde følgende felter:    <ul><li><code>CreateNavigationProperties</code> : En logisk v&#230;rdi (true/false), der angiver, om der skal genereres navigationsegenskaber p&#229; de returnerede v&#230;rdier (standard er true).</li><li><code>HierarchicalNavigation</code> : En logisk v&#230;rdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien er 15 sekunder.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li><li><code>SqlCompatibleWindowsAuth</code> : En logisk v&#230;rdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardv&#230;rdien er true.</li></ul>


## Examples

### Example #1 
Returner SQL-tabellerne og -visningerne fra den angivne forbindelsesstreng.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
