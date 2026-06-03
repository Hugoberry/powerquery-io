---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Importera data från en Amazon Redshift-databas.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell med tabellerna i Amazon Redshift-klustret `server` i databasen `databas`. En valfri postparameter, `alternativ`, kan anges för att styra följande alternativ:

-   `Namn på leverantör`: Ett textvärde som används som leverantörsnamn för anslutningen. Det används när Microsoft Authentication används.
-   `Batchstorlek`: Antalet rader som hämtas i ett enda anrop till servern.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



