---
title: Sql.Database
---

# Sql.Database


Returnerer en tabel over SQL-tabeller, visninger og lagrede funktioner fra SQL Server-databasen.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over SQL-tabeller, visninger og lagrede funktioner fra SQL Server-databasen `database` på serveren `server`. Porten kan eventuelt være angivet med serveren, adskilt af et kolon eller et komma. En valgfri parameter for post, `options`, kan være angivet for at kontrollere følgende indstillinger:

-   `Query` : En integreret SQL-forespørgsel, der anvendes til hentning af data. Hvis forespørgslen genererer flere resultatsæt, returneres kun det første.
-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true).
-   `NavigationPropertyNameGenerator` : En funktion, der anvendes til at oprette navne til navigationsegenskaber.
-   `MaxDegreeOfParallelism` : Et tal, der angiver værdien for delsætningen i "maxdop"-forespørgslen i den genererede SQL-forespørgsel.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien afhænger af driveren.
-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).
-   `MultiSubnetFailover` : En logisk værdi (true/false), der angiver værdien af egenskaben "MultiSubnetFailover" i forbindelsesstrengen (standard er false).
-   `UnsafeTypeConversions` : En logisk værdi (sand/falsk), som, hvis sand, forsøger at folde typekonverteringer, som kan mislykkes, og som medfører, at hele forespørgslen mislykkes. Anbefales ikke til generel brug.
-   `ContextInfo` : En binær værdi, der bruges til at angive CONTEXT\_INFO, før hver kommando køres.
-   `OmitSRID` : En logisk værdi (sand/falsk), som, hvis sand, udelader SRID, når der dannes Well-Known Text fra geometri- og geografityper.
-   `EnableCrossDatabaseFolding` : En logisk værdi (sand/falsk), som, hvis sand, tillader forespørgselsdelegering på tværs af databaser på den samme server. Standardværdien er falsk.

Postparameteren angives f.eks. som \[option1 = value1, option2 = value2...\] eller \[Query = "select ..."\].



## Category
Accessing data
