---
title: Spark.Tables
---

# Spark.Tables


## Description

ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark ที่ระบุไว้


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Details

ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark <code>โฮสต์</code> โดยใช้ <code>โปรโตคอล</code> โปรโตคอลที่ถูกต้องคือ:SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1 
แสดงรายการตารางในอินสแตนซ์ Azure Spark
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



