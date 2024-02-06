---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


คืนค่าคอลเลกชันรูปแบบสำหรับแหล่งข้อมูล ADO.NET


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

คืนค่าคอลเลกชันรูปแบบสำหรับแหล่งข้อมูล ADO.NET ที่มีชื่อผู้ให้บริการ <code>providerName</code> และสตริงการเชื่อมต่อ <code>connectionString</code> <code>connectionString</code> สามารถเป็นข้อความหรือเรกคอร์ดของคู่ค่าคุณสมบัติได้ ค่าคุณสมบัติสามารถเป็นได้ทั้งข้อความหรือตัวเลข สามารถเพิ่มพารามิเตอร์เรกคอร์ดเสริม <code>options</code> เพื่อระบุคุณสมบัติเพิ่มเติมได้ โดยในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:    <ul><li><code>CommandTimeout</code> : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที</li><li><code>SqlCompatibleWindowsAuth</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างตัวเลือกสตริงการเชื่อมต่อที่สามารถทำงานร่วมกับ SQL Server ได้ สำหรับการรับรองความถูกต้องของ Windows หรือไม่ ค่าเริ่มต้นคือจริง</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
