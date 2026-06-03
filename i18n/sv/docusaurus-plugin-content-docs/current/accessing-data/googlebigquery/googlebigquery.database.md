---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importera data från en Google BigQuery-databas.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med lista över tillgängliga projekt i Google BigQuery. En valfri postparameter, `alternativ`, kan anges för att styra följande alternativ:

-   `ConnectionTimeout`: En varaktighet som anger hur lång tid som ska gå innan ett försök att skapa en anslutning till servern avbryts. Standardvärdet är tidsgränsvärdet för ODBC-anslutningen.
-   `CommandTimeout`: En varaktighet som anger hur länge frågan på serversidan ska tillåtas köra innan den avbryts.
-   `BillingProject`: Faktureringsprojekt-ID. Standardvärdet är det första tillgängliga projektet.
-   `UseStorageApi`: Anger huruvida BigQuery Storage-API ska användas för stora resultatmängder. Standardvärdet är sant för användning av Storage-API. Ställ in på false för att inte använda Storage-API

Postparametern anges som \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Lista tillgängliga projekt i Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



