---
title: Spark.Tables
---

# Spark.Tables


ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark ที่ระบุไว้


## Syntax

```powerquery
Spark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark `โฮสต์` โดยใช้ `โปรโตคอล` โปรโตคอลที่ถูกต้องคือ: SparkProtocol.Standard, SparkProtocol.Azure, SparkProtocol.HTTP


## Examples

### Example #1
แสดงรายการตารางในอินสแตนซ์ Azure Spark
```powerquery
Spark.Tables("contoso.azurehdinsight.net", SparkProtocol.Azure)
```



