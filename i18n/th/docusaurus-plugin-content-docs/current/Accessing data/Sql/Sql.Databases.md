---
title: Sql.Databases
---

# Sql.Databases


## Description

ส่งกลับตารางของฐานข้อมูลบน SQL Server


## Syntax

```powerquery
Sql.Databases(
    server as text,
    optional options as record
) as table
```


## Details

คืนค่าตารางฐานข้อมูลบน SQL server ที่ระบุ <code>server</code> อาจระบุเรกคอร์ดพารามิเตอร์เสริม <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้ได้:    <ul><li><code>CreateNavigationProperties</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือจริง)</li><li><code>NavigationPropertyNameGenerator</code> : ฟังก์ชันที่ใช้สำหรับการสร้างชื่อของคุณสมบัติการนำทาง</li><li><code>MaxDegreeOfParallelism</code> : ตัวเลขที่กำหนดค่าของส่วนคำสั่งคิวรี &quot;maxdop&quot; ในคิวรี SQL ที่สร้างขึ้น</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>HierarchicalNavigation</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะดูตารางโดยจัดกลุ่มตามชื่อรูปแบบหรือไม่ (ค่าเริ่มต้นคือเท็จ)</li><li><code>MultiSubnetFailover</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดค่าของคุณสมบัติ &quot;MultiSubnetFailover&quot; ในสตริงการเชื่อมต่อ (ค่าเริ่มต้นคือเท็จ)</li><li><code>UnsafeTypeConversions</code> : ตรรกะ (จริง/เท็จ) ซึ่งถ้าเป็นจริงจะพยายามพับการแปลงชนิดซึ่งอาจล้มเหลวและทำให้คิวรีทั้งหมดล้มเหลวได้ ไม่แนะนำสำหรับการใช้งานทั่วไป</li><li><code>ContextInfo</code> : ค่าไบนารีที่ใช้ในการตั้งค่า CONTEXT_INFO ก่อนที่จะเรียกใช้แต่ละคำสั่ง</li><li><code>OmitSRID</code> : ตรรกะ (จริง/เท็จ) ซึ่งถ้าเป็นจริงจะละเว้น SRID เมื่อสร้าง Well-Known Text จากชนิด geometry และชนิด geography</li><li><code>EnableCrossDatabaseFolding</code> : ค่าตรรกะ (จริง/เท็จ) ซึ่งถ้าเป็นค่าจริงจะอนุญาตให้พับคิวรีข้ามฐานข้อมูลบนเซิร์ฟเวอร์เดียวกันได้ ค่าเริ่มต้นเป็นเท็จ</li></ul>    เรกคอร์ดพารามิเตอร์จะระบุในรูปแบบ [option1 = value1, option2 = value2...] เป็นต้น    <br />    ไม่สนับสนุนการตั้งค่าคิวรี SQL ให้เรียกใช้บนเซิร์ฟเวอร์ ควรใช้ <code>Sql.Database</code> ในการเรียกใช้คิวรี SQL แทน    



## Category
Accessing data
