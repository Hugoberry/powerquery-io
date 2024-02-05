---
title: AdoDotNet.Query
---

# AdoDotNet.Query


## Description

ส่งคืนผลลัพธ์การเรียกใช้คิวรีแบบเนทีฟบนแหล่งข้อมูล ADO.NET


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

ส่งคืนผลลัพธ์การเรียกใช้ <code>query</code> ด้วยสตริงการเชื่อมต่อ <code>connectionString</code> โดยใช้ตัวให้บริการ ADO.NET <code>providerName</code> <code>connectionString</code> สามารถเป็นข้อความหรือระเบียนคู่สำหรับค่าคุณสมบัติ ค่าคุณสมบัติสามารถเป็นข้อความหรือตัวเลข สามารถเพิ่มพารามิเตอร์เรกคอร์ดเสริม <code>options</code> เพื่อระบุคุณสมบัติเพิ่มเติมได้ โดยในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:    <ul><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>SqlCompatibleWindowsAuth</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างตัวเลือกสตริงการเชื่อมต่อที่สามารถทำงานร่วมกับ SQL Server ได้ สำหรับการรับรองความถูกต้องของ Windows หรือไม่ ค่าเริ่มต้นคือจริง</li></ul>



## Category
Accessing data
