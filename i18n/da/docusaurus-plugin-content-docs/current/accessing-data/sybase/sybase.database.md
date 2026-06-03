---
title: Sybase.Database
---

# Sybase.Database


Returnerer en tabel over SQL-tabeller og visninger, der findes i en Sybase-database.


## Syntax

```powerquery
Sybase.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over SQL-tabeller og visninger, der er tilgængelige i en Sybase-database på serveren `server` i den forekomst af databasen, der hedder `database`. Porten kan eventuelt være angivet med serveren, adskilt af et kolon. En valgfri parameter for post, `options`, kan være angivet for at kontrollere følgende indstillinger:

-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true).
-   `NavigationPropertyNameGenerator` : En funktion, der anvendes til at oprette navne til navigationsegenskaber.
-   `Query` : En integreret SQL-forespørgsel, der anvendes til hentning af data. Hvis forespørgslen genererer flere resultatsæt, returneres kun det første.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien afhænger af driveren.
-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).

Postparameteren angives f.eks. som \[option1 = value1, option2 = value2...\] eller \[Query = "select ..."\].



## Category
Accessing data
