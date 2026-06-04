---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Повертає таблицю зі списком таблиць у вказаному кластері Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Повертає таблицю із списком таблиць у кластері Spark, для якого вказано параметри `host` і `protocol`. Припустимі протоколи: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Повертає таблицю зі списком таблиць у вказаному кластері Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



