---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


## Description

Importați date dintr-o bază de date Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Details

      Returnează un tabel care enumeră proiectele disponibile în Google BigQuery. Se poate specifica un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:       <ul>        <li><code>ConnectionTimeout</code>: o durată care controlează cât timp se așteaptă înainte de a abandona o încercare de conectare la server. Valoarea implicită este valoarea de expirare a conexiunii ODBC.</li>        <li><code>CommandTimeout</code>: o durată care controlează cât timp poate rula interogarea de pe partea serverului înainte de a fi anulată.</li>        <li><code>BillingProject</code>: ID-ul proiectului de facturare. Valoarea implicită este primul proiect disponibil.</li>        <li><code>UseStorageApi</code>: specifică dacă se utilizează API-ul de stocare BigQuery pentru seturile de rezultate mari. Valoarea implicită este true pentru a utiliza API-ul de stocare. Setați la false pentru a nu utiliza API-ul de stocare</li>      </ul>    Parametrul de înregistrare este specificat ca [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Listați proiectele disponibile în Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



