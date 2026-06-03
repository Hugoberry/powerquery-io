---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


นำเข้าข้อมูลจาก Interactive Query ของ HDInsight


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับรายการของตารางจาก Interactive Query ของ HDInsight ที่ระบุโดย`ฐานข้อมูล` บน `เซิร์ฟเวอร์` Interactive Query ของ HDInsight อาจสามารถเลือกระบุพอร์ตพร้อมเซิร์ฟเวอร์ได้ โดยคั่นด้วยโคลอน อาจระบุพารามิเตอร์ `ตัวเลือก` เพิ่มเติมเพื่อควบคุมตัวเลือกต่อไปนี้:

-   `ConnectionTimeout`: ระยะเวลาที่ควบคุมเวลาที่รอก่อนที่จะละทิ้งความพยายามในการเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นจะขึ้นอยู่กับไดรเวอร์
-   `CommandTimeout`: ระยะเวลาที่ควบคุมเวลาซึ่งการคิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้ทำงานก่อนที่จะถูกยกเลิก ค่าเริ่มต้นจะขึ้นอยู่กับไดรเวอร์

พารามิเตอร์ `ตัวเลือก` ถูกระบุเป็น \[option1 = value1, option2 = value2...\]


