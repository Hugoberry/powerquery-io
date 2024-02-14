---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Возвращает таблицу со списком таблиц в указанном кластере Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу со списком таблиц в <code>узле</code> кластера Spark с помощью <code>протокола</code>. Допустимые протоколы:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Возвращает таблицу со списком таблиц в указанном кластере Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



