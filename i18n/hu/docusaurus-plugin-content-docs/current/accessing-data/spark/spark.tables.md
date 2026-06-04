---
title: Spark.Tables
---

# Spark.Tables


A megadott Spark-fürtön lévő táblákat felsoroló táblát adja vissza.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

A megadott Spark-fürt `host` elemén lévő táblákat felsoroló táblát adja vissza `protocol` használatával. Az érvényes protokollok a következők: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Azure Spark-példányban lévő táblák listázása.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



