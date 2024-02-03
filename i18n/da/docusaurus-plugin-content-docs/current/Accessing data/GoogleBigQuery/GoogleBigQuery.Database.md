---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importér data fra en Google BigQuery-database.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Returnerer en tabel, der viser de tilgængelige projekter i Google BigQuery. Der kan angives en valgfri postparameter, <code>options</code>, for at styre følgende indstillinger:      <ul>      <li><code>ConnectionTimeout</code>: En varighed, der styrer, hvor længe der skal ventes, før et forsøg på at oprette forbindelse til serveren afbrydes. Standardværdien er timeoutværdi for ODBC-forbindelse.</li> <li><code>CommandTimeout</code>: En varighed, der styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres.</li> <li><code>BillingProject</code>:  Faktureringsprojekt-id. Standardværdien er det første tilgængelige projekt.</li> <li><code>UseStorageApi</code>: Angiver, om BigQuery Storage API skal bruges til store resultatsæt. Standardværdien er sand, hvis du vil bruge Storage API. Angiv til falsk, hvis du ikke vil bruge Storage API</li> </ul> Postparameteren er angivet som [option1 = value1, option2 = value2...].


## Examples

### Example #1 
Vis de tilgængelige projekter i Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



