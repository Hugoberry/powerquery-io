---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Gegevens uit een Google BigQuery-database importeren.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Hiermee wordt een tabel geretourneerd met de beschikbare projecten in Google BigQuery. Een optionele recordparameter `options` kan worden opgegeven om de volgende opties te beheren:

-   `ConnectionTimeout`: een waarde voor de duur waarmee wordt bepaald hoelang wordt gewacht voordat een poging om een verbinding te maken met de server wordt afgebroken. De standaardwaarde is de waarde voor de ODBC-verbindingstime-out.
-   `CommandTimeout`: een waarde voor de duur waarmee wordt bepaald hoelang de query op de server mag worden uitgevoerd voordat de query wordt geannuleerd.
-   `BillingProject`: factureringsproject-id. De standaardwaarde is het eerste beschikbare project.
-   `UseStorageApi`: Hiermee wordt aangegeven of de BigQuery Storage-API moet worden gebruikt voor grote resultatensets. De standaardwaarde is true, waarmee de Storage-API wordt gebruikt. Stel de waarde in op false om de Storage-API niet te gebruiken

De recordparameter wordt opgegeven als \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
De beschikbare projecten in Google BigQuery weergeven
```powerquery
GoogleBigQuery.Database()
```



