---
title: Spark.Tables
---

# Spark.Tables


Trả lại một bảng liên kế các bảng trên cụm Spark được chỉ định.


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

Trả lại một bảng liên kế các bảng trên cụm Spark <code>host</code> using <code>protocol</code>.  Các giao thức hợp lệ là:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
Liệt kê các bảng trong phiên bản Azure Spark.
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



