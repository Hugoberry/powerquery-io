---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Gegevens importeren uit een Google BigQuery-database met behulp van Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Retourneert een tabel met de beschikbare projecten in Google BigQuery met behulp van Microsoft Entra ID voor `Factureringsproject-id`. Een optionele recordparameter `options` kan worden opgegeven om de volgende opties te beheren:

-   `ConnectionTimeout`: een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is de waarde voor de ODBC-verbindingstime-out.
-   `CommandTimeout`: een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd.
-   `UseStorageApi`: Hiermee wordt aangegeven of de BigQuery Storage-API moet worden gebruikt voor grote resultatensets. De standaardwaarde is true, waarmee de Storage-API wordt gebruikt. Stel de waarde in op false om de Storage-API niet te gebruiken
-   `AudienceUri`: dit is de doelgroep-URI die in het ODBC-stuurprogramma kan worden gebruikt voor de aanvragen voor tokenuitwisseling. Dit veld moet een volledig gekwalificeerde URI zijn (dat wil zeggen: //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), waarbij pool\_id een algemene unieke naam is om de personeelsgroep te identificeren.

De recordparameter wordt opgegeven als \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
De beschikbare projecten in Google BigQuery weergeven met behulp van Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



