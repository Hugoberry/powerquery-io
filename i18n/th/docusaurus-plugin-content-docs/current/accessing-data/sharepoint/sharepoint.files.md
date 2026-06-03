---
title: SharePoint.Files
---

# SharePoint.Files


ส่งกลับตารางที่มีเอกสารจากไซต์ SharePoint


## Syntax

```powerquery
SharePoint.Files(
    url as text,
    optional options as record
) as table
```


## Remarks

ส่งคืนตารางที่มีแถวสำหรับแต่ละเอกสารที่พบในไซต์ SharePoint `url` และโฟลเดอร์ย่อยที่ระบุไว้ แต่ละแถวประกอบด้วยคุณสมบัติของโฟลเดอร์หรือไฟล์และลิงก์ไปยังเนื้อหา อาจมีการระบุ `options` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `ApiVersion` : ตัวเลข (14 หรือ 15) หรือข้อความ "Auto" ที่ระบุรุ่นของ SharePoint API ที่จะใช้สำหรับไซต์นี้ เมื่อไม่ได้ระบุ จะใช้ API รุ่น 14 เมื่อระบุ Auto ไว้ ระบบจะค้นหารุ่นของเซิร์ฟเวอร์โดยอัตโนมัติ หากสามารถทำได้ หรือจะใช้ค่าเริ่มต้นรุ่นที่ 14 ไซต์ SharePoint ที่ไม่ใช่ภาษาอังกฤษ จะต้องใช้รุ่น 15 เป็นอย่างน้อย



## Category
Accessing data
