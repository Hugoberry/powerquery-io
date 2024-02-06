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

ส่งกลับรายการของตารางจาก Hive LLAP ที่ระบุโดย <code>ฐานข้อมูล</code> บน <code>เซิร์ฟเวอร์</code> Hive LLAP โดยใช้ <code>โพรโทคอล</code> ที่เลือก อาจสามารถเลือกระบุหมายเลขพอร์ตพร้อมเซิร์ฟเวอร์ได้ โดยคั่นด้วยเครื่องหมายทวิภาค Thrift Transport Protocol คือชนิดที่ระบุด้วยค่า "Binary", "SASL", "HTTP" อาจระบุพารามิเตอร์ <code>ตัวเลือก</code> เพิ่มเติมเพื่อควบคุมตัวเลือกต่อไปนี้:<ul>        <li><code>ConnectionTimeout</code>: ระยะเวลาที่ควบคุมเวลาที่รอก่อนที่จะละทิ้งความพยายามในการเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นจะขึ้นอยู่กับไดรเวอร์</li>        <li><code>CommandTimeout</code>: ระยะเวลาที่ควบคุมเวลาซึ่งคิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้ทำงานก่อนที่จะถูกยกเลิก ค่าเริ่มต้นจะขึ้นอยู่กับไดรเวอร์</li></ul>พารามิเตอร์ <code>ตัวเลือก</code> ถูกระบุเป็น [option1 = value1, option2 = value2...]


