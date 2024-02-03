---
title: Spark.Tables
---

# Spark.Tables


## Description

A megadott Spark-fürtön lévő táblákat felsoroló táblát adja vissza.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

A megadott Spark-fürt <code>host</code> elemén lévő táblákat felsoroló táblát adja vissza <code>protocol</code> használatával.  Az érvényes protokollok a következők:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Azure Spark-példányban lévő táblák listázása.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



