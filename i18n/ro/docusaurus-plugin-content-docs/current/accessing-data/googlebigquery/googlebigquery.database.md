---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Importați date dintr-o bază de date Google BigQuery.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Returnează un tabel care enumeră proiectele disponibile în Google BigQuery. Poate fi specificat un parametru opțional al înregistrării, `options`, pentru a controla următoarele opțiuni:

-   `ConnectionTimeout`: O durată care controlează cât timp se așteaptă înainte de a abandona încercarea de a face o conexiune la server. Valoarea implicită este timpul de expirare pentru conexiunea ODBC.
-   `CommandTimeout`: O durată care controlează cât timp este permisă rularea interogării pe partea de server înainte de anulare.
-   `BillingProject`: ID-ul proiectului de facturare. Valoarea implicită este primul proiect disponibil.
-   `UseStorageApi`: Specifică dacă se utilizează API-ul de stocare BigQuery pentru seturi mari de rezultate. Valoarea implicită este True pentru a utiliza API-ul de stocare. Setați la False pentru a nu utiliza API-ul de stocare

Parametrul înregistrării este specificat ca \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Listați proiectele disponibile în Google BigQuery
```powerquery
GoogleBigQuery.Database()
```



