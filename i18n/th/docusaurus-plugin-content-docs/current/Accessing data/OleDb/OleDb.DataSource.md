---
title: OleDb.DataSource
---

# OleDb.DataSource


## Description

คืนค่าตารางของตาราง SQL และมุมมองจากแหล่งข้อมูล OLE DB


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Details

ส่งคืนตารางของตาราง SQL และมุมมองจากแหล่งข้อมูล OLE DB ที่ระบุโดยสตริงการเชื่อมต่อ <code>connectionString</code> <code>connectionString</code> สามารถเป็นข้อความหรือเรกคอร์ดของคู่ค่าคุณสมบัติ ค่าคุณสมบัติสามารถเป็นข้อความหรือตัวเลขก็ได้ อาจมีการกำหนดเรกคอร์ดพารามิเตอร์เสริม <code>options</code> เพื่อระบุคุณสมบัติเพิ่มเติม ในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:    <ul><li><code>CreateNavigationProperties</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือจริง)</li><li><code>NavigationPropertyNameGenerator</code> : ฟังก์ชันที่ใช้สำหรับการสร้างชื่อของคุณสมบัติการนำทาง</li><li><code>Query</code> : คิวรี SQL แบบเนทีฟที่ใช้ในการดึงข้อมูล หากคิวรีมีการสร้างชุดผลลัพธ์หลายชุด ระบบจะส่งคืนเฉพาะชุดผลลัพธ์แรกเท่านั้น</li><li><code>HierarchicalNavigation</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางโดยจัดกลุ่มตามชื่อรูปแบบหรือไม่ (ค่าเริ่มต้นคือจริง)</li><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>SqlCompatibleWindowsAuth</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างตัวเลือกสตริงการเชื่อมต่อที่สามารถทำงานร่วมกับ SQL Server ได้ สำหรับการรับรองความถูกต้องของ Windows หรือไม่ ค่าเริ่มต้นคือจริง</li></ul>    เรกคอร์ดพารามิเตอร์จะระบุในรูปแบบ [option1 = value1, option2 = value2...] หรือ [Query = "select ..."] เป็นต้น



## Category
Accessing data
