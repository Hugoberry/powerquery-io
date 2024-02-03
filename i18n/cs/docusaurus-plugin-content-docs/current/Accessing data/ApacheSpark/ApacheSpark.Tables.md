---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Vrátí tabulku se seznamem tabulek pro zadaný cluster Spark.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Vrátí tabulku se seznamem tabulek pro cluster Spark <code>host</code> pomocí <code>protocol</code>. Platné protokoly jsou tyto:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Vrátí tabulku se seznamem tabulek pro zadaný cluster Spark.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



