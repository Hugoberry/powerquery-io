---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Importér data fra en Google BigQuery-database ved hjælp af Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Returnerer en tabel med en oversigt over de tilgængelige projekter i Google BigQuery ved hjælp af Azure AD til <code>Fakturering af projekt-id</code> . Der kan angives en valgfri postparameter, <code>options</code>, for at styre følgende indstillinger:       <ul>        <li><code>ConnectionTimeout</code>: En varighed, der styrer, hvor længe der skal ventes, før et forsøg på at oprette forbindelse til serveren afbrydes. Standardværdien er timeoutværdi for ODBC-forbindelse.</li>        <li><code>CommandTimeout</code>: En varighed, der styrer, hvor længe forespørgslen på serversiden må køre, før den annulleres.</li>        <li><code>UseStorageApi</code>:  Angiver, om BigQuery Storage API skal bruges til store resultatsæt. Standardværdien er sand, hvis du vil bruge Storage API. Angiv til falsk, hvis du vil ikke bruge Storage API</li>        <li><code>AudienceUri</code>: Dette er målgruppe-URI'en, som ODBC-driveren kan bruge til sine anmodninger om tokenudveksling. Dette felt skal være en fuldt kvalificeret URI (dvs. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider), hvor pool_id er et globalt entydigt navn til at identificere arbejdsstyrkepuljen.</li>      </ul>    Postparameteren er angivet som [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Vis de tilgængelige projekter i Google BigQuery ved hjælp af Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



