---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

指定された Spark クラスター上のテーブルの一覧を示すテーブルを返します。


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

<code>protocol</code> を使用して Spark クラスター <code>host</code> 上のテーブルの一覧を示すテーブルを返します。有効なプロトコルは次のとおりです:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
指定された Spark クラスター上のテーブルの一覧を示すテーブルを返します。
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



