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

Zwraca tabelę z listą tabel w elemencie <code>host</code> klastra platformy Spark używającego elementu <code>protocol</code>. Prawidłowe protokoły:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Zwraca tabelę z listą tabel w określonym klastrze platformy Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



