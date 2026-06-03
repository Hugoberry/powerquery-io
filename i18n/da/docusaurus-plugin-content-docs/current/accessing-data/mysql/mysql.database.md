---
title: MySQL.Database
---

# MySQL.Database


Returnerer en tabel over SQL-tabeller, visninger og lagrede skalafunktionner, der findes i en MySQL-database.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over SQL-tabeller, visninger og lagrede skalafunktioner, der er tilgængelige i en MySQL-database på serveren `server` i den forekomst af databasen, der hedder `database`. Porten kan eventuelt være angivet med serveren, adskilt af et kolon. En valgfri parameter for post, `options`, kan være angivet for at kontrollere følgende indstillinger:

-   `Encoding` : En TextEncoding-værdi, som angiver det tegnsæt, der bruges til at kode alle forespørgsler, der sendes til serveren (som standard null).
-   `CreateNavigationProperties` : En logisk værdi (true/false), der angiver, om der skal genereres navigationsegenskaber på de returnerede værdier (standard er true).
-   `NavigationPropertyNameGenerator` : En funktion, der anvendes til at oprette navne til navigationsegenskaber.
-   `Query` : En integreret SQL-forespørgsel, der anvendes til hentning af data. Hvis forespørgslen genererer flere resultatsæt, returneres kun det første.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien afhænger af driveren.
-   `TreatTinyAsBoolean` : En logisk værdi (true/false), der afgør, om tinyint-kolonner på serveren skal gennemtvinges som logiske værdier. Standardværdien er true.
-   `OldGuids` : En logisk værdi (true/false), der angiver, om char(36)-kolonner (hvis false) eller binary(16)-kolonner (hvis true) behandles som GUID'er. Standardværdien er false.
-   `ReturnSingleDatabase` : En logisk værdi (true/false), der angiver, om samtlige tabeller i alle databaser skal returneres (hvis false), eller om der skal returneres tabeller og visninger for den angivne database (hvis true). Standardværdien er false.
-   `HierarchicalNavigation` : En logisk værdi (true/false), der angiver, om tabellerne skal vises grupperet efter skemanavne (standard er false).

Postparameteren angives f.eks. som \[option1 = value1, option2 = value2...\] eller \[Query = "select ..."\].



## Category
Accessing data
