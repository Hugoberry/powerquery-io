---
title: SapHana.Database
---

# SapHana.Database


Returnerer pakkerne i en SAP HANA-database.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel over multidimensionelle pakker fra SAP HANA-databasen `server`. Der kan angives en valgfri postparameter, `options`, for at styre følgende indstillinger:

-   `Query` : En integreret SQL-forespørgsel, der anvendes til hentning af data. Hvis forespørgslen genererer flere resultatsæt, returneres kun det første.
-   `Distribution` : En SapHanaDistribution, der angiver værdien for egenskaben "Distribution" i forbindelsesstrengen. Sætningsrouting er en metode til at evaluere den korrekte servicenode i et distribueret system, inden sætningen udføres. Standardværdien er SapHanaDistribution.All.
-   `Implementation` : Angiver, hvilken implementering af SAP HANA-forbindelsen der bruges.
-   `EnableColumnBinding` : Binder variabler til kolonnerne i et SAP HANA-resultatsæt, når der hentes data. Kan muligvis forbedre ydeevnen på grund af en lidt højere udnyttelse af hukommelsen. Standardværdien er falsk.
-   `ConnectionTimeout` : En varighed, som styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er 15 sekunder.
-   `CommandTimeout` : En varighed, som styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres. Standardværdien er ti minutter.



## Category
Accessing data
