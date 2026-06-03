---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Returnerer en tabel med flerdimensionelle kuber eller tabelmodeller fra Analysis Services-databasen.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel med flerdimensionelle kuber eller tabelmodeller fra Analysis Services-databasen `database` på serveren `server`. Der kan angives en valgfri postparameter, `options`, for at styre følgende indstillinger:

-   `Query` : En integreret MDX-forespørgsel, der anvendes til hentning af data.
-   `TypedMeasureColumns` : En logisk værdi, der angiver, om de typer, der er angivet i den flerdimensionelle model eller tabelmodellen, skal bruges til typerne af tilføjede målingskolonner. Når typen "number" er angivet til false, bruges den til alle målingskolonner. Standardværdien for denne indstilling er false.
-   `Culture` : Et kulturnavn, der angiver datakulturen. Dette svarer til egenskaben for forbindelsesstrengen 'landestandard-id'.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien afhænger af driveren.
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien afhænger af driveren.
-   `SubQueries` : Et tal (0, 1 eller 2), der angiver værdien for egenskaben "SubQueries" i forbindelsesstrengen. Dette styrer funktionsmåden for beregnede medlemmer i under-select-delsætninger eller delkuber. (Standardværdien er 2).
-   `Implementation`



## Category
Accessing data
