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

ส่งคืนการแทนเชิงโครงสร้างของฐานข้อมูลของ Access, <code>database</code> อาจระบุเรกคอร์ดพารามิเตอร์เสริม <code>options</code> เพื่อควบคุมตัวเลือกต่อไปนี้ได้:    <ul><li><code>CreateNavigationProperties</code> : ตรรกะ (จริง/เท็จ) ที่กำหนดว่าจะสร้างคุณสมบัติการนำทางบนค่าที่ส่งคืนหรือไม่ (ค่าเริ่มต้นคือเท็จ)</li><li><code>NavigationPropertyNameGenerator</code> : ฟังก์ชันที่ใช้สำหรับการสร้างชื่อของคุณสมบัติการนำทาง</li></ul>     เรกคอร์ดพารามิเตอร์จะระบุในรูปแบบ [option1 = value1, option2 = value2...] เป็นต้น



## Category
Accessing data
