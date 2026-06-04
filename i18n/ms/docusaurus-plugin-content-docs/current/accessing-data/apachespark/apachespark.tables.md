---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark yang ditentukan.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark `hos` menggunakan `protokol`. Protokol sah adalah: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Mengembalikan jadual yang menyenaraikan jadual pada gugusan Spark yang ditentukan.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



