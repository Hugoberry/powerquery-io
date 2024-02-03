---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


## Description

Trả lại một bảng liên kế các bảng trên cụm Spark được chỉ định.


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

Trả lại một bảng liên kế các bảng trên cụm Spark <code>host</code> using <code>protocol</code>.  Các giao thức hợp lệ là:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
Trả lại một bảng liên kế các bảng trên cụm Spark được chỉ định.
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



