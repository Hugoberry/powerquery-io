---
title: Spark.Tables
---

# Spark.Tables


Returnează un tabel ce listează tabelele din clusterul Spark specificat.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Returnează un tabel ce listează tabelele din gazda `host` de cluster Spark utilizând `protocol`. Protocoale valide sunt: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Listează tabelele dintr-o instanță Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



