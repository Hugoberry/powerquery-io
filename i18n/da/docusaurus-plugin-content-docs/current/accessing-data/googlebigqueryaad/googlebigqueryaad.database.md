---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importér data fra en Google BigQuery-database ved hjælp af Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Returnerer en tabel, der viser de tilgængelige projekter i Google BigQuery ved hjælp af Microsoft Entra ID til `id'et for faktureringsprojekt` . Der kan angives en valgfri postparameter, `indstillinger`, for at styre følgende indstillinger:

-   `ConnectionTimeout`: En varighed, der styrer, hvor længe der skal ventes, før forsøget på at oprette forbindelse til serveren opgives. Standardværdien er værdien for ODBC-forbindelsestimeout.
-   `CommandTimeout`: En varighed, der styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres.
-   `UseStorageApi`: Angiver, om BigQuery Storage API skal bruges til store resultatsæt. Standardværdien er sand, hvis du vil bruge Storage API. Angiv som falsk for ikke at bruge Storage API
-   `AudienceUri`: Dette er målgruppe-URI'en, som ODBC-driveren kan bruge til sine anmodninger om tokenudveksling. Dette felt skal være en fuldt kvalificeret URI (dvs. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), hvor pool\_id er et globalt entydigt navn for at identificere arbejdsstyrkepuljen.

Post-parameteren er angivet som \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Vis de tilgængelige projekter i Google BigQuery ved hjælp af Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



