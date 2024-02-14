---
title: ApacheSpark.Tables
---

# ApacheSpark.Tables


ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark ที่ระบุไว้


## Syntax

```powerquery
ApacheSpark.Tables(
    server as text,
    protocol as SparkProtocol.Type,
    optional options as record
) as table
```


## Remarks

ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark <code>โฮสต์</code> โดยใช้ <code>โปรโตคอล</code> โปรโตคอลที่ถูกต้องคือ:SparkProtocol.Standard, SparkProtocol.HTTP


## Examples

### Example #1 
ส่งคืนค่าตารางที่แสดงตารางสำหรับคลัสเตอร์ Spark ที่ระบุไว้
```powerquery
Spark.Tables("http://example.com:10000/cliservice", SparkProtocol.HTTP)
```



