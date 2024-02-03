---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importera data från en Google BigQuery-databas.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Returnerar en tabell med tillgängliga projekt i Google BigQuery. En valfri postparameter <code>options</code> kan anges för att styra följande alternativ:      <ul>        <li><code>ConnectionTimeout</code>: En varaktighet som styr väntetiden innan ett försök ska göras för att upprätta en anslutning till servern. Standardvärdet är värdet för ODBC-anslutningstidsgräns.</li>        <li><code>CommandTimeout</code>: En varaktighet som styr hur länge frågan på serversidan tillåts köra innan den avbryts.</li>        <li><code>BillingProject</code>: ID för faktureringsprojekt. Standardvärdet är det första tillgängliga projektet.</li>        <li><code>UseStorageApi</code>: Anger huruvida BigQuery Storage-API ska användas för stora resultatmängder. Standardvärdet är sant för användning av Storage-API. Ställ in det på falskt om du inte vill använda Storage-API</li>      </ul>    Postparametern anges som [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Lista tillgängliga projekt i Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



