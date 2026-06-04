---
title: Spark.Tables
---

# Spark.Tables


Повертає таблицю зі списком таблиць у вказаному кластері Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Повертає таблицю із списком таблиць у кластері Spark, для якого вказано параметри `host` і `protocol`. Припустимі протоколи: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Створити список таблиць в екземплярі Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



