---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


## Description

Importați date dintr-o bază de date Google BigQuery utilizând Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Details

      Returnează un tabel care enumeră proiectele disponibile în Google BigQuery utilizând Azure AD pentru <code>ID-ul proiectului de facturare</code>. Se poate specifica un parametru de înregistrare opțional, <code>options</code>, pentru a controla următoarele opțiuni:      <ul>        <li><code>ConnectionTimeout</code>: o durată care controlează cât timp se așteaptă înainte de a abandona o încercare de conectare la server. Valoarea implicită este valoarea de expirare a conexiunii ODBC.</li>        <li><code>CommandTimeout</code>: o durată care controlează cât timp poate rula interogarea de pe partea serverului înainte de a fi anulată.</li>        <li><code>UseStorageApi</code>: specifică dacă se utilizează API-ul de stocare BigQuery pentru seturile de rezultate mari. Valoarea implicită este True pentru a utiliza API-ul de stocare. Setați la False pentru a nu utiliza API-ul de stocare</li>        <li><code>AudienceUri</code>: acesta este URI-ul audienței pe care driverul ODBC îl poate utiliza pentru solicitările sale de schimb de tokenuri. Acest câmp trebuie să fie un URI complet calificat (de exemplu, //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/aad-provider), unde pool_id este un nume unic global pentru a identifica grupul forței de muncă.</li>      </ul>    Parametrul de înregistrare este specificat ca [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Listați proiectele disponibile în Google BigQuery utilizând Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



