---
title: Spark.Tables
---

# Spark.Tables


Возвращает таблицу со списком таблиц в указанном кластере Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Возвращает таблицу со списком таблиц в <code>узле</code> кластера Spark с помощью <code>протокола</code>. Допустимые протоколы:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Список таблиц в экземпляре Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



