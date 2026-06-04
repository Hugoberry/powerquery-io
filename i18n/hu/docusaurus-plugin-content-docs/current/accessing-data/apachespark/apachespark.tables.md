---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


A megadott Spark-fürtön lévő táblákat felsoroló táblát adja vissza.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

A megadott Spark-fürt `host` elemén lévő táblákat felsoroló táblát adja vissza `protocol` használatával. Az érvényes protokollok a következők: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
A megadott Spark-fürtön lévő táblákat felsoroló táblát adja vissza.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



