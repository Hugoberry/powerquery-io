---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Adatok importálása Amazon Redshift-adatbázisból.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Az adatbázis <code>adatbázis</code> Amazon Redshift fürt <code>kiszolgálójában</code> lévő táblákat felsoroló táblát adja vissza.  Megadható egy választható rekordparaméter, a <code>beállítások</code>, a következő beállítások vezérléséhez:<ul><li><code>Szolgáltató neve</code>: A kapcsolat szolgáltatójának neveként használandó szöveges érték. Ezt Microsoft-hitelesítés használatakor használják.</li><li><code>Köteg mérete</code>: A kiszolgáló egyetlen hívása során beolvasandó sorok száma.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



