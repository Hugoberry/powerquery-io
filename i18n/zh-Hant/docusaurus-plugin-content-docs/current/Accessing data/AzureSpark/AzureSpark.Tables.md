---
title: AzureSpark.Tables
---

# AzureSpark.Tables


列出 Azure Spark 執行個體中的資料表。


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Remarks

列出 Azure Spark 執行個體中的資料表。


## Examples

### Example #1 
列出 Azure Spark 執行個體中的資料表。
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



