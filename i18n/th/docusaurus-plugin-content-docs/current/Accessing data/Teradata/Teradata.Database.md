---
title: Teradata.Database
---

# Teradata.Database


## Description

ส่งกลับตารางของตาราง SQL และมุมมองจากฐานข้อมูล Teradata


## Syntax

```powerquery
Teradata.Database(
    server as text,
    optional options as record
) as table
```


## Details

คืนค่าตารางของตาราง SQL และมุมมองจากฐานข้อมูล Teradata บนเซิร์ฟเวอร์ <code>server</code> สามารถเลือกระบุพอร์ตพร้อมเซิร์ฟเวอร์ได้ โดยคั่นด้วยเครื่องหมายโคลอน อาจระบุระเบียนพารามิเตอร์เสริม <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้ได้:    <ul><li><code>CreateNavigationProperties</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือจริง)</li><li><code>NavigationPropertyNameGenerator</code> : ฟังก์ชันที่ใช้สำหรับการสร้างชื่อของคุณสมบัติการนำทาง</li><li><code>Query</code> : คิวรี SQL แบบเนทีฟที่ใช้ในการดึงข้อมูล หากคิวรีมีการสร้างชุดผลลัพธ์หลายชุด ระบบจะส่งคืนเฉพาะชุดผลลัพธ์แรกเท่านั้น</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>HierarchicalNavigation</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางโดยจัดกลุ่มตามชื่อรูปแบบหรือไม่ (ค่าเริ่มต้นคือเท็จ)</li></ul>    เรกคอร์ดพารามิเตอร์จะระบุในรูปแบบ [option1 = value1, option2 = value2...] หรือ [Query = "select ..."] เป็นต้น    



## Category
Accessing data
