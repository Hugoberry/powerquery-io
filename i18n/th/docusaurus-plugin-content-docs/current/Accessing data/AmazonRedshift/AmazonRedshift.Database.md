---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

นำเข้าข้อมูลจากฐานข้อมูล Amazon Redshift


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

ส่งกลับตารางที่แสดงรายการตารางใน<code>เซิร์ฟเวอร์</code>คลัสเตอร์ Amazon Redshift ในฐานข้อมูล <code>ฐานข้อมูล</code> อาจมีการระบุ<code>ตัวเลือก</code>พารามิเตอร์ของระเบียนที่เลือกได้เพื่อควบคุมตัวเลือกต่อไปนี้:<ul><li><code>ชื่อตัวให้บริการ</code>: ค่าข้อความที่จะใช้เป็นชื่อตัวให้บริการสําหรับการเชื่อมต่อ ซึ่งจะใช้เมื่อใช้ Microsoft Authentication</li><li><code>ขนาดชุด</code>: จํานวนแถวที่ถูกดึงมาในการโทรแบบครั้งเดียวไปยังเซิร์ฟเวอร์</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



