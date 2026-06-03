---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


นำเข้าข้อมูลจาก Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

ส่งกลับรายการของตารางจาก Hive LLAP ที่ระบุโดย `ฐานข้อมูล` บน `เซิร์ฟเวอร์` Hive LLAP โดยใช้ `โพรโทคอล` ที่เลือก อาจสามารถเลือกระบุหมายเลขพอร์ตพร้อมเซิร์ฟเวอร์ได้ โดยคั่นด้วยเครื่องหมายทวิภาค Thrift Transport Protocol คือชนิดที่ระบุด้วยค่า "Binary", "SASL", "HTTP" อาจระบุพารามิเตอร์ `ตัวเลือก` เพิ่มเติมเพื่อควบคุมตัวเลือกต่อไปนี้:

-   `ConnectionTimeout`: ระยะเวลาที่ควบคุมเวลาที่รอก่อนที่จะละทิ้งความพยายามในการเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นจะขึ้นอยู่กับไดรเวอร์
-   `CommandTimeout`: ระยะเวลาที่ควบคุมเวลาซึ่งคิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้ทำงานก่อนที่จะถูกยกเลิก ค่าเริ่มต้นจะขึ้นอยู่กับไดรเวอร์

พารามิเตอร์ `ตัวเลือก` ถูกระบุเป็น \[option1 = value1, option2 = value2...\]


