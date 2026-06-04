---
title: Spark.Tables
---

# Spark.Tables


Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark yang ditentukan.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark `hos` menggunakan `protokol`. Protokol sah adalah: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Senarai jadual dalam tika Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



