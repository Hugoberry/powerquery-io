---
title: OleDb.DataSource
---

# OleDb.DataSource


Returnerer en tabel med SQL-tabeller og visninger fra OLE DB-datakilden.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med SQL-tabeller og visninger fra den OLE DB datakilde, der er angivet af forbindelsesstrengen `connectionString`. `connectionString` kan være tekst eller en post med egenskabsværdipar. Egenskabsværdier kan enten være en tekst eller et tal. En valgfri optagelsesparameter, `options`, kan angives for at vælge yderligere egenskaber. Posten kan indeholde følgende felter:

-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true).
-   `NavigationPropertyNameGenerator` : En funktion, der anvendes til at oprette navne til navigationsegenskaber.
-   `Query` : En integreret SQL-forespørgsel, der anvendes til hentning af data. Hvis forespørgslen genererer flere resultatsæt, returneres kun det første.
-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er true).
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien afhænger af driveren.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `SqlCompatibleWindowsAuth` : En logisk værdi (true/false), der bestemmer, om der skal fremstilles SQL Server-kompatible forbindelsesstrengindstillinger til Windows-godkendelse. Standardværdien er true.

Postparameteren er angivet som f.eks. \[option1 = value1, option2 = value2...\] eller \[Query = "select ..."\]..



## Category
Accessing data
