---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Gegevens importeren uit een Google BigQuery-database met behulp van Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Retourneert een tabel met de beschikbare projecten in Google BigQuery met behulp van Azure AD voor <code>factureringsproject-id</code>. Er kan een optionele recordparameter, <code>opties</code>, worden opgegeven om de volgende opties te beheren:      <ul>        <li><code>ConnectionTimeout</code>: een duur waarmee wordt bepaald hoe lang moet worden gewacht voordat een poging om verbinding te maken met de server wordt afgebroken. De standaardwaarde is de ODBC Connection Timeout-waarde.</li>        <li><code>CommandTimeout</code>: een duur waarmee wordt bepaald hoe lang de query aan de serverzijde mag worden uitgevoerd voordat deze wordt geannuleerd.</li>        <li><code>UseStorageApi</code>: hiermee geeft u op of de BigQuery-opslag-API moet worden gebruikt voor grote resultatensets. De standaardwaarde is waar voor het gebruik van de opslag-API. Ingesteld op onwaar om opslag-API niet te gebruiken</li>        <li><code>AudienceUri</code>: dit is de doelgroep-URI die het ODBC-stuurprogramma kan gebruiken voor de aanvragen voor tokenuitwisseling. Dit veld moet een volledig gekwalificeerde URI zijn (dat wil zeggen //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), waarbij pool_id een globaal unieke naam is om de personeelsgroep te identificeren.</li>      </ul>    De recordparameter is opgegeven als [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
De beschikbare projecten in Google BigQuery weergeven met behulp van Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



