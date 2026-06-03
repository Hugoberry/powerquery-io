---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Zwraca tabelę z listą tabel w określonym klastrze platformy Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Zwraca tabelę z listą tabel w elemencie `host` klastra platformy Spark używającego elementu `protocol`. Prawidłowe protokoły: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Zwraca tabelę z listą tabel w określonym klastrze platformy Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



