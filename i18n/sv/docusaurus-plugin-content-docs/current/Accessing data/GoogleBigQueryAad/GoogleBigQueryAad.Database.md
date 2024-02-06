---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importera data från en Google BigQuery-databas med Hjälp av Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Returnerar en tabell som visar tillgängliga projekt i Google BigQuery med hjälp av Azure AD för <code>Fakturering av projekt-ID</code> . En valfri postparameter, <code>options</code>, kan anges för att styra följande alternativ:      <ul>        <li><code>ConnectionTimeout</code>: En varaktighet som styr hur lång tid det ska ta innan ett försök att upprätta en anslutning till servern avbryts. Standardvärdet är ODBC Connection Timeout value.</li>        <li><code>CommandTimeout</code>: En varaktighet som styr hur länge frågan på serversidan tillåts köras innan den avbryts.</li>        <li><code>UseStorageApi</code>:  Anger om BigQuery Storage-API:et ska användas för stora resultatuppsättningar. Standardvärdet är sant för att använda Lagrings-API. Ställ in på falskt om du inte vill använda Storage API</li>        <li><code>AudienceUri</code>: Det här är målgrupps-URI:n som ODBC-drivrutinen kan använda för sina tokenutbytesbegäranden. Det här fältet måste vara en fullständigt kvalificerad URI (dvs. //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider) där pool_id är ett globalt unikt namn för att identifiera arbetsstyrkans pool.</li>      </ul>    Postparametern anges som [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Lista tillgängliga projekt i Google BigQuery med hjälp av Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



