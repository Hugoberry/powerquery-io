---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


นำเข้าข้อมูลจากฐานข้อมูล Amazon Redshift


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

ส่งกลับตารางที่แสดงรายการตารางบนคลัสเตอร์ Amazon Redshift `เซิร์ฟเวอร์` ในฐานข้อมูล `ฐานข้อมูล` อาจมีการระบุพารามิเตอร์ระเบียน `ตัวเลือก` เพิ่มเติม เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `ชื่อผู้ให้บริการ`: ค่าข้อความที่จะใช้เป็นชื่อผู้ให้บริการสําหรับการเชื่อมต่อ ซึ่งใช้เมื่อใช้การรับรองความถูกต้องของ Microsoft
-   `ขนาดกลุ่ม`: จํานวนแถวที่ถูกดึงมาในการเรียกใช้เซิร์ฟเวอร์ครั้งเดียว


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



