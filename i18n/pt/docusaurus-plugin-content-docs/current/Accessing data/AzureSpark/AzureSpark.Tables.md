---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

List the tables in an Azure Spark instance.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

List the tables in an Azure Spark instance.


## Examples

### Example #1 
List the tables in an Azure Spark instance.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



