---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Retourne une table répertoriant les tables sur le cluster Spark spécifié.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Retourne une table répertoriant les tables sur le cluster Spark `host` à l'aide de `protocol`. Les protocoles valides sont : SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Retourne une table répertoriant les tables sur le cluster Spark spécifié.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



