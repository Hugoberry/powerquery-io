---
title: SapHana.Database
---

# SapHana.Database


## Description

Returnerer pakkerne i en SAP HANA-database.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

Returnerer en tabel over multidimensionelle pakker fra SAP HANA-databasen <code>server</code>. Der kan angives en valgfri postparameter, <code>options</code>, for at styre følgende indstillinger:    <ul><li><code>Query</code> : En integreret SQL-foresp&#248;rgsel, der anvendes til hentning af data. Hvis foresp&#248;rgslen genererer flere resultats&#230;t, returneres kun det f&#248;rste.</li><li><code>Distribution</code> : En SapHanaDistribution, der angiver v&#230;rdien for egenskaben &quot;Distribution&quot; i forbindelsesstrengen. S&#230;tningsrouting er en metode til at evaluere den korrekte servicenode i et distribueret system, inden s&#230;tningen udf&#248;res. Standardv&#230;rdien er SapHanaDistribution.All.</li><li><code>Implementation</code> : Angiver, hvilken implementering af SAP HANA-forbindelsen der bruges.</li><li><code>EnableColumnBinding</code> : Binder variabler til kolonnerne i et SAP HANA-resultats&#230;t, n&#229;r der hentes data. Kan muligvis forbedre ydeevnen p&#229; grund af en lidt h&#248;jere udnyttelse af hukommelsen. Standardv&#230;rdien er falsk.</li><li><code>ConnectionTimeout</code> : En varighed, som styrer, hvor l&#230;nge der skal ventes, f&#248;r fors&#248;get p&#229; at oprette forbindelse til serveren opgives. Standardv&#230;rdien er 15 sekunder.</li><li><code>CommandTimeout</code> : En varighed, som styrer, hvor l&#230;nge foresp&#248;rgslen p&#229; serversiden m&#229; k&#248;re, f&#248;r den annulleres. Standardv&#230;rdien er ti minutter.</li></ul>    



## Category
Accessing data
