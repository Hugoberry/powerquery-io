---
title: Access.Database
---

# Access.Database


ส่งกลับการแสดงโครงสร้างของฐานข้อมูล Access


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

ส่งคืนการแทนเชิงโครงสร้างของฐานข้อมูล Access, `database` อาจมีการระบุพารามิเตอร์เรกคอร์ดที่เลือกได้ `options` เพื่อควบคุมตัวเลือกต่อไปนี้:

-   `CreateNavigationProperties` : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือเท็จ)
-   `NavigationPropertyNameGenerator` : ฟังก์ชันที่ใช้สำหรับการสร้างชื่อของคุณสมบัติการนำทาง

พารามิเตอร์ระเบียนถูกระบุเป็น \[option1 = value1, option2 = value2...\] ตัวอย่างเช่น



## Category
Accessing data
