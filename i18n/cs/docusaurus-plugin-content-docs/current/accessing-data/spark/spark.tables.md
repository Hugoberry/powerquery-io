---
title: Spark.Tables
---

# Spark.Tables


Vrátí tabulku se seznamem tabulek pro zadaný cluster Spark.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Vrátí tabulku se seznamem tabulek pro cluster Spark `host` pomocí `protocol`. Platné protokoly jsou tyto: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
Vytvoří seznam tabulek v instanci Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



