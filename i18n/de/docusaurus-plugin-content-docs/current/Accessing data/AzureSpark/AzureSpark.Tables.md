---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

Liste der Tabellen in einer Azure Spark-Instanz.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

Liste der Tabellen in einer Azure Spark-Instanz.


## Examples

### Example #1 
Liste der Tabellen in einer Azure Spark-Instanz.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



