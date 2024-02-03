---
title: Spark.Tables
---

# Spark.Tables


## Description

Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark yang ditentukan.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark <code>hos</code> menggunakan <code>protokol</code>.  Protokol sah adalah:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Senarai jadual dalam tika Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



