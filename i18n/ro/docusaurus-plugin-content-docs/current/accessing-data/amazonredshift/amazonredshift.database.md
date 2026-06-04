---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importați date dintr-o bază de date Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnează un tabel care listează tabelele de pe clusterul Amazon Redshift `server` din baza de date `database`. Poate fi specificat un parametru opțional al înregistrării, `options`, pentru a controla următoarele opțiuni:

-   `Nume de furnizor`: o valoare text de utilizat ca Nume de furnizor pentru conexiune. Acest lucru se utilizează atunci când utilizați Autentificarea Microsoft.
-   `Dimensiunea lotului`: numărul de rânduri preluate într-un singur apel către server.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



