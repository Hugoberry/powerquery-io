---
title: OleDb.Query
---

# OleDb.Query


## Description

แสดงผลลัพธ์การใช้งานแบบสอบถามบนแหล่งข้อมูล OLE DB


## Syntax

```powerquery
OleDb.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

ส่งคืนผลลัพธ์การเรียกใช้ <code>query</code> ด้วยสตริงการเชื่อมต่อ <code>connectionString</code> โดยใช้ OLE DB <code>connectionString</code> สามารถเป็นข้อความหรือระเบียนคู่สำหรับค่าคุณสมบัติ ค่าคุณสมบัติสามารถเป็นข้อความหรือตัวเลข สามารถเพิ่มพารามิเตอร์เรกคอร์ดเสริม <code>options</code> เพื่อระบุคุณสมบัติเพิ่มเติมได้ โดยในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:    <ul><li><code>ConnectionTimeout</code> : ระยะเวลาที่ควบคุมว่าจะรอนานเพียงใดก่อนที่จะละทิ้งความพยายามที่จะเชื่อมต่อกับเซิร์ฟเวอร์ ค่าเริ่มต้นขึ้นอยู่กับโปรแกรมควบคุม</li><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>SqlCompatibleWindowsAuth</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างตัวเลือกสตริงการเชื่อมต่อที่สามารถทำงานร่วมกับ SQL Server ได้ สำหรับการรับรองความถูกต้องของ Windows หรือไม่ ค่าเริ่มต้นคือจริง</li></ul>



## Category
Accessing data
