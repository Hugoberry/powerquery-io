---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Returnerar en tabell som listar tabellerna för det angivna Spark-klustret.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som listar tabellerna i Spark-klustret <code>host</code> med <code>protocol</code>.  Giltiga protokoll är:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Returnerar en tabell som listar tabellerna för det angivna Spark-klustret.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



