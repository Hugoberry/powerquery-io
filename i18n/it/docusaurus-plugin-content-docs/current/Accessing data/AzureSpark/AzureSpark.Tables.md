---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

Elenca le tabelle in un&#39;istanza di Azure Spark.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

Elenca le tabelle in un'istanza di Azure Spark.


## Examples

### Example #1 
Elenca le tabelle in un&#39;istanza di Azure Spark.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



