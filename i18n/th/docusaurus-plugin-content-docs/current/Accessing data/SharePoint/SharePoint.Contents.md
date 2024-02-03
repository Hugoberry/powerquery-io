---
title: SharePoint.Contents
---

# SharePoint.Contents


## Description

ส่งกลับตารางที่มีเนื้อหาจากไซต์ SharePoint


## Syntax

```powerquery
SharePoint.Contents(
    url as text,
    optional options as record
) as table
```


## Details

ส่งคืนตารางที่มีแถวสำหรับแต่ละโฟลเดอร์และเอกสารที่พบในไซต์ SharePoint ที่ระบุไว้ <code>url</code> แต่ละแถวประกอบด้วยคุณสมบัติของโฟลเดอร์หรือไฟล์และลิงก์ไปยังเนื้อหา อาจมีการระบุ <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้:    <ul><li><code>ApiVersion</code> : ตัวเลข (14 หรือ 15) หรือข้อความ &quot;Auto&quot; ที่ระบุรุ่นของ SharePoint API ที่จะใช้สำหรับไซต์นี้ เมื่อไม่ได้ระบุ จะใช้ API รุ่น 14 เมื่อระบุ Auto ไว้ ระบบจะค้นหารุ่นของเซิร์ฟเวอร์โดยอัตโนมัติ หากสามารถทำได้ หรือจะใช้ค่าเริ่มต้นรุ่นที่ 14 ไซต์ SharePoint ที่ไม่ใช่ภาษาอังกฤษ จะต้องใช้รุ่น 15 เป็นอย่างน้อย</li></ul>    



## Category
Accessing data
