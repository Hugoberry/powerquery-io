---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

返回列出指定 Spark 群集上的表的表。


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

使用<code>协议</code>返回列出 Spark 群集<code>主机</code>上的表的表，有效协议为:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
返回列出指定 Spark 群集上的表的表。
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



