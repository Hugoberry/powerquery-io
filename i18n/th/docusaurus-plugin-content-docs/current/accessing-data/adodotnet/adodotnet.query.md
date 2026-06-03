---
title: AdoDotNet.Query
---

# AdoDotNet.Query


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


## Remarks

ส่งคืนผลลัพธ์การเรียกใช้ `query` ด้วยสตริงการเชื่อมต่อ `connectionString` โดยใช้ตัวให้บริการ ADO.NET `providerName` `connectionString` สามารถเป็นข้อความหรือระเบียนคู่สำหรับค่าคุณสมบัติ ค่าคุณสมบัติสามารถเป็นข้อความหรือตัวเลข สามารถเพิ่มพารามิเตอร์เรกคอร์ดเสริม `options` เพื่อระบุคุณสมบัติเพิ่มเติมได้ โดยในเรกคอร์ดสามารถมีเขตข้อมูลต่อไปนี้ได้:

-   `CommandTimeout` : ระยะเวลาที่ควบคุมว่าจะอนุญาตให้คิวรีฝั่งเซิร์ฟเวอร์ทำงานนานเพียงใดก่อนที่จะถูกยกเลิก ค่าเริ่มต้นคือสิบนาที
-   `SqlCompatibleWindowsAuth` : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างตัวเลือกสตริงการเชื่อมต่อที่สามารถทำงานร่วมกับ SQL Server ได้ สำหรับการรับรองความถูกต้องของ Windows หรือไม่ ค่าเริ่มต้นคือจริง



## Category
Accessing data
