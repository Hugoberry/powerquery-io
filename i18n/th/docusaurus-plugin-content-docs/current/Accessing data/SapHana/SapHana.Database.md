---
title: SapHana.Database
---

# SapHana.Database


## Description

ส่งคืนแพคเกจในฐานข้อมูล SAP HANA


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Details

ส่งคืนตารางแพ็คเกจหลายมิติจากฐานข้อมูล SAP HANA <code>server</code> อาจระบุเรกคอร์ดพารามิเตอร์เสริม <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้:    <ul><li><code>Query</code> : คิวรี SQL แบบเนทีฟที่ใช้ในการดึงข้อมูล หากคิวรีมีการสร้างชุดผลลัพธ์หลายชุด ระบบจะส่งคืนเฉพาะชุดผลลัพธ์แรกเท่านั้น</li><li><code>Distribution</code> : SapHanaDistribution ที่ตั้งค่าของคุณสมบัติของ &quot;การแจกจ่าย&quot; ในสตริงการเชื่อมต่อ การกำหนดเส้นทางคำสั่งเป็นวิธีของการประเมินผลโหนดเซิร์ฟเวอร์ที่ถูกต้องของระบบที่ทำงานร่วมกันหลายระบบก่อนการปฏิบัติการตามคำสั่ง ค่าเริ่มต้นคือ SapHanaDistribution.All</li><li><code>Implementation</code> : ระบุการใช้งานตัวเชื่อมต่อ SAP HANA เพื่อใช้</li><li><code>EnableColumnBinding</code> : ผูกตัวแปรเข้ากับคอลัมน์ของชุดผลลัพธ์ SAP HANA เมื่อดึงข้อมูล อาจปรับปรุงประสิทธิภาพด้วยต้นทุนการใช้หน่วยความจําสูงขึ้นเล็กน้อย ค่าเริ่มต้นเป็นเท็จ</li><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นคือ 15 วินาที</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li></ul>    



## Category
Accessing data
