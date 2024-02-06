---
title: AzureSpark.Tables
---

# AzureSpark.Tables


Liste der Tabellen in einer Azure Spark-Instanz.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Remarks

Liste der Tabellen in einer Azure Spark-Instanz.


## Examples

### Example #1 
Liste der Tabellen in einer Azure Spark-Instanz.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



