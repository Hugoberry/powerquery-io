---
title: AzureSpark.Tables
---

# AzureSpark.Tables


Vytvoří seznam tabulek v instanci Azure Spark.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Remarks

Vytvoří seznam tabulek v instanci Azure Spark.


## Examples

### Example #1
Vytvoří seznam tabulek v instanci Azure Spark.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



