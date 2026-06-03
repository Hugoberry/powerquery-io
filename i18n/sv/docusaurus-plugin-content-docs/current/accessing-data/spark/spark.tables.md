---
title: Spark.Tables
---

# Spark.Tables


Returnerar en tabell som listar tabellerna för det angivna Spark-klustret.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Returnerar en tabell som listar tabellerna i Spark-klustret `host` med `protocol`. Giltiga protokoll är: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Lista tabellerna i en Azure Spark-instans.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



