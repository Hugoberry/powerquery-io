---
title: Spark.Tables
---

# Spark.Tables


## Description

Повертає таблицю зі списком таблиць у вказаному кластері Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Повертає таблицю із списком таблиць у кластері Spark, для якого вказано параметри <code>host</code> і <code>protocol</code>. Припустимі протоколи:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Створити список таблиць в екземплярі Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



