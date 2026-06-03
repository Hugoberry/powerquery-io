---
title: DB2.Database
---

# DB2.Database


Returnerer en tabel over de SQL-tabeller og -visninger, der er tilgængelige i en Db2-database.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over SQL-tabeller og visninger, der er tilgængelige i en Db2-database på serveren `server` i den forekomst af databasen, der hedder `database`. Porten kan eventuelt være angivet med serveren, adskilt af et kolon. En valgfri parameter for post, `options`, kan være angivet for at kontrollere følgende indstillinger:

-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true).
-   `NavigationPropertyNameGenerator` : En funktion, der anvendes til at oprette navne til navigationsegenskaber.
-   `Query` : En integreret SQL-forespørgsel, der anvendes til hentning af data. Hvis forespørgslen genererer flere resultatsæt, returneres kun det første.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien afhænger af driveren.
-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).
-   `Implementation` : Angiver, hvilken implementering af den interne databaseprovider der skal bruges. Gyldige værdier: "IBM" og "Microsoft".
-   `BinaryCodePage` : Et tal for CCSID'et (Coded Character Set Identifier) til afkodning af binære Db2 FOR BIT-data til tegnstrenge. Gælder for Implementation = “Microsoft”. Angiv 0 for at deaktivere konvertering (standard). Angiv til 1 for at konvertere på baggrund af databasekodning. Angiv et andet CCSID-tal for at konvertere til programkodning.
-   `PackageCollection` : Angiver en strengeværdi for pakkesamling (standardværdien er "NULLID") for at muliggøre anvendelsen af delte pakker, der kræves for at behandle SQL-sætninger. Gælder for Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Angiver, om forbindelsen oprettes via en Db2 Connect-gateway. Gælder for implementering = "Microsoft".

Postparameteren angives f.eks. som \[option1 = value1, option2 = value2...\] eller \[Query = "select ..."\].



## Category
Accessing data
