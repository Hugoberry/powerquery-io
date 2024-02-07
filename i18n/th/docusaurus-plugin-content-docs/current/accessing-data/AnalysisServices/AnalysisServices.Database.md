---
title: AnalysisServices.Database
---

# AnalysisServices.Database


ส่งคืนตารางคิวบ์หลายมิติหรือโมเดลตารางจากฐานข้อมูล Analysis Services


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

ส่งคืนตารางคิวบ์หลายมิติหรือรูปแบบตารางจากฐานข้อมูล Analysis Services <code>database</code> บนเซิร์ฟเวอร์ <code>server</code> อาจระบุเรกคอร์ดพารามิเตอร์เสริม <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้ได้:    <ul><li><code>Query</code> : คิวรี MDX แบบเนทีฟที่ใช้ในการดึงข้อมูล</li><li><code>TypedMeasureColumns</code> : ค่าตรรกะที่กำหนดว่าจะใช้ชนิดที่ระบุในรูปแบบหลายมิติหรือตาราง สำหรับชนิดของคอลัมน์หน่วยวัดที่เพิ่ม เมื่อตั้งค่าเป็นเท็จ จะใช้ชนิด &quot;number&quot; สำหรับคอลัมน์หน่วยวัดทั้งหมด ค่าเริ่มต้นของตัวเลือกนี้คือเท็จ</li><li><code>Culture</code> : ชื่อวัฒนธรรมที่ระบุวัฒนธรรมสำหรับข้อมูล ส่วนนี้จะสอดคล้องกับคุณสมบัติสตริงการเชื่อมต่อ &#39;ตัวระบุภาษา&#39;</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>SubQueries</code> : ตัวเลข (0, 1 หรือ 2) ที่กำหนดค่าของคุณสมบัติ &quot;SubQueries&quot; ในสตริงการเชื่อมต่อ ซึ่งควบคุมลักษณะการทำงานของสมาชิกที่ได้รับการคำนวณแล้วบน subselects หรือ subcubes (ค่าเริ่มต้นคือ 2)</li><li><code>Implementation</code></li></ul>    



## Category
Accessing data
