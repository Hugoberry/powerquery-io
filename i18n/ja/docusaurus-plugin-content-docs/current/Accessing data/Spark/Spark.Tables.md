---
title: Spark.Tables
---

# Spark.Tables


指定された Spark クラスター上のテーブルの一覧を示すテーブルを返します。


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

<code>protocol</code> を使用して Spark クラスター <code>host</code> 上のテーブルの一覧を示すテーブルを返します。有効なプロトコルは次のとおりです:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Azure Spark インスタンス内のテーブルを一覧表示します。
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



