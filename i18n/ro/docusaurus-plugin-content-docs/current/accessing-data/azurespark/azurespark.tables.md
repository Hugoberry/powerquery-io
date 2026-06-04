---
title: AzureSpark.Tables
---

# AzureSpark.Tables


Listează tabelele dintr-o instanță Azure Spark.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Remarks

Listează tabelele dintr-o instanță Azure Spark.


## Examples

### Example #1
Listează tabelele dintr-o instanță Azure Spark.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



