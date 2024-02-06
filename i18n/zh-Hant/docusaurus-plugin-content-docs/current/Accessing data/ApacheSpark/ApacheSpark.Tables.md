---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


傳回一個資料表，其中列出指定的 Spark 叢集上之資料表。


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

傳回一個資料表，其中列出使用 <code>protocol</code> 之 Spark 叢集 <code>host</code> 上的資料表。有效的通訊協定為:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
傳回一個資料表，其中列出指定的 Spark 叢集上之資料表。
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



