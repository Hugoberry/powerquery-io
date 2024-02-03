---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

列出 Azure Spark 实例中的表。


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

列出 Azure Spark 实例中的表。


## Examples

### Example #1 
列出 Azure Spark 实例中的表。
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



