---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Importēt datus no Google BigQuery datu bāzes, izmantojot Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Atgriež tabulu, kurā ir uzskatīti Google BigQuery pieejamie projekti, izmantojot Microsoft Entra ID darbam ar `Billing Project ID` . Neobligāts ieraksta parametrs `opcijas` var tikt iestatīts, lai kontrolētu šādas opcijas:

-   `ConnectionTimeout`: ilgums, kura laikā tiek noteikts, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir ODBC savienojuma noildzes vērtība.
-   `CommandTimeout`: ilgums, kas nosaka, cik ilgi var darboties servera puses vaicājums pirms tā atcelšanas.
-   `UseStorageApi`: norāda, vai izmantot BigQuery krātuves API lielām rezultātu kopām. Noklusējuma vērtība ir "true", lai izmantotu Storage API. Iestatiet kā nepatiesu, lai neizmantotu krātuves API
-   `AudienceUri`: šis ir auditorijas URI, kuru ODBC draiveris var izmantot saviem marķieru apmaiņas pieprasījumiem. Šajā laukā ir jābūt norādītai pilnībā atbilstošai URI adresei (i.e. //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread), kur pool\_id ir globāli unikāls darbaspēka kopas nosaukums.

Ieraksta parametrs ir norādīts kā \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Norādīt pieejamos projektus pakalpojumā Google BigQuery, izmantojot Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



