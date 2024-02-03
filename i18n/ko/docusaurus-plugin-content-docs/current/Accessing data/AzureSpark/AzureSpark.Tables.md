---
title: AzureSpark.Tables
---

# AzureSpark.Tables


## Description

Azure Spark 인스턴스의 테이블을 나열합니다.


## Syntax

```powerquery
AzureSpark.Tables(
    server as text,
    optional options as record
) as table
```


## Details

Azure Spark 인스턴스의 테이블을 나열합니다.


## Examples

### Example #1 
Azure Spark 인스턴스의 테이블을 나열합니다.
```powerquery
AzureSpark.Tables("contoso.azurehdinsight.net")
```



