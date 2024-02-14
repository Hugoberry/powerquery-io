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

Returnerar en tabell med tabellerna i Amazon Redshift-klustret <code>server</code> i databasen <code>databas</code>. En valfri postparameter, <code>alternativ</code>, kan anges för att styra följande alternativ:<ul><li><code>Providernamn</code>: Ett textvärde som ska användas som providernamn för anslutningen. Det här används när Microsoft Authentication.</li><li><code>Batchstorlek</code>: Antalet rader som hämtas i ett enda anrop till servern.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



