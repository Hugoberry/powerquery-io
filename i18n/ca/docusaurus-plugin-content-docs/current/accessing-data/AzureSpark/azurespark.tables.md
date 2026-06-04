---
title: AzureSpark.Tables
---

# AzureSpark.Tables


Enumera les taules d'una instància de l'Azure Spark.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Remarks

Enumera les taules d'una instància de l'Azure Spark.


## Examples

### Example #1
Enumera les taules d'una instància de l'Azure Spark.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



