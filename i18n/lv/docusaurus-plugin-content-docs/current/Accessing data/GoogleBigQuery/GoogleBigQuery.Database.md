---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importējiet datus no Google BigQuery datu bāzes.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Atgriež tabulu, kurā ir norādīti pakalpojumā Google BigQuery pieejamie vaicājumi. Var norādīt neobligātu ieraksta parametru <code>options</code>, lai kontrolētu šādas opcijas:      <ul>        <li><code>ConnectionTimeout</code>: ilgums, kas tiek izmantots, lai pārvaldītu, cik ilgi jāgaida, pirms tiek atmests mēģinājums izveidot savienojumu ar serveri. Noklusējuma vērtība ir ODBC savienojuma taimauta vērtība.</li>        <li><code>CommandTimeout</code>: ilgums, ko izmanto, lai pārvaldītu to, cik ilgi tiek atļauts izpildīt servera puses vaicājumu, pirms tas tiek atcelts.</li>        <li><code>BillingProject</code>: norēķinu projekta nosaukums. Noklusējuma vērtība ir pirmā pieejamā projekta nosaukums.</li>        <li><code>UseStorageApi</code>: norāda, vai lielām rezultātu kopām izmantot BigQuery Storage API. Noklusējuma vērtība ir "true", lai izmantotu Storage API. Iestatiet "false", lai neizmantotu Storage API</li>      </ul>    Ieraksta parametrs tiek norādīts, piemēram, šādi: [1.opcija = 1.vērtība, 2. opcija = 2. vērtība...].


## Examples

### Example #1 
Norādiet pakalpojumā Google BigQuery pieejamos projektus
```powerquery
GoogleBigQuery.Database()
```



