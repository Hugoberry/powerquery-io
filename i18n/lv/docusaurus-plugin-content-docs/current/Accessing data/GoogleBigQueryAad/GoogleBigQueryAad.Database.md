---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Importēt datus no Google BigQuery datu bāzes, izmantojot Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Atgriež sarakstu tabulas veidā ar Google BigQuery pieejamajiem sarakstiem, izmantojot Azure AD <code>norēķinu projekta ID</code>. Neobligāts ieraksta parametrs, <code>opcijas</code>, var tikt definēts tālāk norādīto opciju pārvaldībai:      <ul>        <li><code>ConnectionTimeout</code>: laika periods, kas nosaka, cik ilgi ir jāgaida pirms savienojuma ar serveri izveides mēģinājuma atmešanas. Noklusējuma vertība ir ODBC savienojuma noildzes vērtība.</li>        <li><code>CommandTimeout</code>: laika periods, kas nosaka, cik ilgi tiek atļauts darboties pieprasījumam no servera puses pirms tā atcelšanas.</li>        <li><code>UseStorageApi</code>: norāda, vai izmantot BigQuery Storage API lielām rezultātu kopām. Noklusējuma vērtība ir true — izmantot Storage API. Iestatiet false, lai neizmantotu Storage API</li>        <li><code>AudienceUri</code>: šis ir auditorijas URI, ko ODBC draiveris var izmantot saviem marķieru apmaiņas pieprasījumiem. Šajā laukā ir jābūt norādītai pilnībā atbilstošai URI adresei (piem., //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread), kur pool_id ir globāli unikāls nosaukums, kas identificē darbaspēka kopu.</li>      </ul>    Ieraksta parametrs tiek norādīts kā [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Norādīt pieejamos projektus pakalpojumā Google BigQuery, izmantojot Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



