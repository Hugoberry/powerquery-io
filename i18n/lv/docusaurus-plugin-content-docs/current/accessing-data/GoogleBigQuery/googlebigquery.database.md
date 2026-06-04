---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importējiet datus no Google BigQuery datu bāzes.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Atgriež tabulu, kurā ir norādīti pakalpojumā Google BigQuery pieejamie vaicājumi. Neobligāts ieraksta parametrs `opcijas` var tikt iestatīts, lai kontrolētu šādas opcijas:

-   `ConnectionTimeout`: ilgums, kura laikā tiek noteikts, cik ilgi gaidīt, pirms tiek atcelts mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir ODBC savienojuma noildzes vērtība.
-   `CommandTimeout`: ilgums, kas nosaka, cik ilgi var darboties servera puses vaicājums pirms tā atcelšanas.
-   `BillingProject`: norēķinu projekta ID. Noklusējuma vērtība ir pirmais pieejamais projekts.
-   `UseStorageApi`: norāda, vai izmantot BigQuery krātuves API lielām rezultātu kopām. Noklusējuma vērtība ir "true", lai izmantotu Storage API. Iestatiet kā nepatiesu, lai neizmantotu krātuves API

Ieraksta parametrs ir norādīts kā \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Norādiet pakalpojumā Google BigQuery pieejamos projektus
```powerquery
GoogleBigQuery.Database()
```



