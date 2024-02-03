---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

Azure Spark インスタンス内のテーブルを一覧表示します。


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

Azure Spark インスタンス内のテーブルを一覧表示します。


## Examples

### Example #1 
Azure Spark インスタンス内のテーブルを一覧表示します。
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



