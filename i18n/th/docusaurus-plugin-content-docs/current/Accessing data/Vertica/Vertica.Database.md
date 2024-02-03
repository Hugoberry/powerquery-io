---
title: Vertica.Database
---

# Vertica.Database


## Description

นำเข้าข้อมูลจาก Vertica


## Syntax

```powerquery
Vertica.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

ส่งกลับตาราง Schema ที่พร้อมใช้งานบนเซิร์ฟเวอร์ที่มีชื่อตามพารามิเตอร์ <code>เซิร์ฟเวอร์</code> ในฐานข้อมูลที่มีชื่อตามพารามิเตอร์ <code>ฐานข้อมูล</code>อาจมีการมอบพารามิเตอร์ระเบียนแบบไม่บังคับที่เรีกยว่า <code>ตัวเลือก</code> เพื่อระบุคุณสมบัติเพิ่มเติมได้ ระเบียนสามารถประกอบด้วยเขตข้อมูลต่อไปนี้:<ul>    <li><code>ConnectionTimeout</code>: ระยะเวลาที่ควบคุมระยะเวลาในการรอก่อนที่จะละทิ้งความพยายามที่จะทำการเชื่อมต่อไปยังเซิร์ฟเวอร์ ค่าเริ่มต้นจะขึ้นอยู่กับโปรแกรมควบคุม </li>    <li><code>CommandTimeout </code>: ระยะเวลาที่ควบคุมระยะเวลาที่คิวรีฝั่งเซิร์ฟเวอร์ได้รับอนุญาตให้เรียกใช้ก่อนที่จะถูกยกเลิก ค่าเริ่มต้นจะขึ้นอยู่กับโปรแกรมควบคุม</li></ul>


## Examples

### Example #1 
แสดงรายการตารางใน Vertica
```powerquery

```



