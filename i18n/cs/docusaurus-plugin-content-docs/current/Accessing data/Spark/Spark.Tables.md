---
title: Spark.Tables
---

# Spark.Tables


## Description

Vrátí tabulku se seznamem tabulek pro zadaný cluster Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Vrátí tabulku se seznamem tabulek pro cluster Spark <code>host</code> pomocí <code>protocol</code>. Platné protokoly jsou tyto:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Vytvoří seznam tabulek v instanci Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



