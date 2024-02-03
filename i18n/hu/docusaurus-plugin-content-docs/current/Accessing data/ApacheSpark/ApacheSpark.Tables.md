---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

A megadott Spark-fürtön lévő táblákat felsoroló táblát adja vissza.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

A megadott Spark-fürt <code>host</code> elemén lévő táblákat felsoroló táblát adja vissza <code>protocol</code> használatával.  Az érvényes protokollok a következők:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
A megadott Spark-fürtön lévő táblákat felsoroló táblát adja vissza.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



