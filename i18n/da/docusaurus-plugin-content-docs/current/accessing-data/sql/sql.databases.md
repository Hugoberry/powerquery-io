---
title: Sql.Databases
---

# Sql.Databases


Returnerer en tabel med databaser på en SQL Server.


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med databaser på den angivne SQL-server, `server`. En valgfri parameter for post, `options`, kan være angivet for at kontrollere følgende indstillinger:

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

Postparameteren angives f.eks. som \[option1 = value1, option2 = value2...\].  
  
Understøtter ikke angivelse af en SQL-forespørgsel, der skal køres på serveren. `Sql.Database` skal i stedet bruges til at køre en SQL-forespørgsel.



## Category
Accessing data
