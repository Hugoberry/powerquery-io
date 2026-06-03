---
title: Spark.Tables
---

# Spark.Tables


返回列出指定 Spark 群集上的表的表。


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

使用`协议`返回列出 Spark 群集`主机`上的表的表，有效协议为: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
列出 Azure Spark 实例中的表。
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



