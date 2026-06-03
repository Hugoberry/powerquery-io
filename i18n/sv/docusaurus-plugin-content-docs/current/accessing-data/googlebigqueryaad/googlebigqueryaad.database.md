---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importera data från en Google BigQuery-databas med hjälp av Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som visar tillgängliga projekt i Google BigQuery med Microsoft Entra ID för `Fakturering av projekt-ID` . En valfri postparameter, `alternativ`, kan anges för att styra följande alternativ:

-   `ConnectionTimeout`: En varaktighet som anger hur lång tid som ska gå innan ett försök att skapa en anslutning till servern avbryts. Standardvärdet är tidsgränsvärdet för ODBC-anslutningen.
-   `CommandTimeout`: En varaktighet som anger hur länge frågan på serversidan ska tillåtas köra innan den avbryts.
-   `UseStorageApi`: Anger huruvida BigQuery Storage-API ska användas för stora resultatmängder. Standardvärdet är sant för användning av Storage-API. Ställ in på false för att inte använda Storage-API
-   `AudienceUri`: Det här är målgrupps-URI:n som ODBC-drivrutinen kan använda för begäranden om tokenutbyte. Det här fältet måste vara en fullständigt kvalificerad URI (d.v.s. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) där pool\_id är ett globalt unikt namn som identifierar personalpoolen.

Postparametern anges som \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Lista tillgängliga projekt i Google BigQuery med hjälp av Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



