---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Gegevens uit een Google BigQuery-database importeren.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Hiermee wordt een tabel geretourneerd met de beschikbare projecten in Google BigQuery. Een optionele recordparameter, <code>options</code>, kan worden opgegeven om de volgende opties te bepalen:      <ul>        <li><code>ConnectionTimeout</code>: Een duur waarmee wordt bepaald hoe lang wordt gewacht voordat er wordt gestopt om te proberen verbinding te maken met de server. De standaardwaarde is de time-outwaarde voor de ODBC-verbinding.</li>        <li><code>CommandTimeout</code>: een duur waarmee wordt bepaald hoe lang de query aan de serverzijde kan worden uitgevoerd voordat deze wordt geannuleerd.</li>        <li><code>BillingProject</code>: De naam van het factureringsproject. De standaardwaarde is het eerste beschikbare project.</li>        <li><code>UseStorageApi</code>: Hiermee wordt aangegeven op de BigQuery Storage-API moet worden gebruikt voor grote resultatensets. De standaardwaarde is Waar, waarmee de Storage-API wordt gebruikt. Stel de waarde in op Onwaar als u de Storage-API niet wilt gebruiken.</li>      </ul>    De recordparameter wordt opgegeven als [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
De beschikbare projecten in Google BigQuery weergeven
```powerquery
GoogleBigQuery.Database()
```



