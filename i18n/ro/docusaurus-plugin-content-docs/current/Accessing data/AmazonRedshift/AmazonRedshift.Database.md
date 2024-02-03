---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Importați date dintr-o bază de date Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Returnează un tabel care listează tabelele de pe clusterul Amazon Redshift <code>server</code> din baza de date <code>database</code>.  Un parametru opțional de înregistrare, <code>options</code>, poate fi specificat pentru a controla următoarele opțiuni:<ul><li><code>Nume furnizor</code>: o valoare text de utilizat ca nume de furnizor pentru conexiune. Se utilizează la utilizarea Microsoft Authentication.</li><li><code>Dimensiune lot</code>: numărul de rânduri preluate într-un singur apel către server.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



