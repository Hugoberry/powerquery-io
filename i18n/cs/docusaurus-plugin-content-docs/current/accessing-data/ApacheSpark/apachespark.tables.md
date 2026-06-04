---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


Vrátí tabulku se seznamem tabulek pro zadaný cluster Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku se seznamem tabulek pro cluster Spark `host` pomocí `protocol`. Platné protokoly jsou tyto: SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1
Vrátí tabulku se seznamem tabulek pro zadaný cluster Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



