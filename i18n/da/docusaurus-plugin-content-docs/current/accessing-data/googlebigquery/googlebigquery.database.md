---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importér data fra en Google BigQuery-database.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der viser de tilgængelige projekter i Google BigQuery. Der kan angives en valgfri postparameter, `indstillinger`, for at styre følgende indstillinger:

-   `ConnectionTimeout`: En varighed, der styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er værdien for ODBC-forbindelsestimeout.
-   `CommandTimeout`: En varighed, der styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres.
-   `BillingProject`: Faktureringsprojekt-id. Standardværdien er det første tilgængelige projekt.
-   `UseStorageApi`: Angiver, om BigQuery Storage API skal bruges til store resultatsæt. Standardværdien er sand, hvis du vil bruge Storage API. Angiv som falsk for ikke at bruge Storage API

Post-parameteren er angivet som \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Vis de tilgængelige projekter i Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



