---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Повертає таблицю зі списком таблиць у вказаному кластері Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Повертає таблицю із списком таблиць у кластері Spark, для якого вказано параметри <code>host</code> і <code>protocol</code>. Припустимі протоколи:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Повертає таблицю зі списком таблиць у вказаному кластері Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



