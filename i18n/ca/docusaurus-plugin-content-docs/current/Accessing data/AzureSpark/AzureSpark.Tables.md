---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

Enumera les taules d&#39;una instància de l&#39;Azure Spark.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

Enumera les taules d'una instància de l'Azure Spark.


## Examples

### Example #1 
Enumera les taules d&#39;una instància de l&#39;Azure Spark.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



