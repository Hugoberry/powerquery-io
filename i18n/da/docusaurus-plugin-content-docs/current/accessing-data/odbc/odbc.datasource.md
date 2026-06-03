---
title: Odbc.DataSource
---

# Odbc.DataSource


Returnerer en tabel med SQL-tabeller og -visninger fra ODBC-data kilden.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med SQL-tabeller og -visninger fra den ODBC-datakilde, der er angivet af forbindelsesstrengen `connectionString`. `connectionString` kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være tekst eller tal. Der kan angives et valgfrit postparameter, `options`, til angivelse af yderligere egenskaber. Denne post kan indeholde følgende felter:

-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true).
-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er 15 sekunder.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `SqlCompatibleWindowsAuth` : En logisk værdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardværdien er true.


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
