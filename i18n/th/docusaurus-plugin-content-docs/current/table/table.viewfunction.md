---
title: Table.ViewFunction
---

# Table.ViewFunction


สร้างฟังก์ชันที่ตัวจัดการที่ระบุในมุมมองสามารถดักข้อมูลได้ (ผ่าน Table.View)


## Syntax

```powerquery
Table.ViewFunction(
    function as function
) as function
```


## Remarks

สร้างฟังก์ชันมุมมองตาม <code>function</code> ที่สามารถจัดการได้ในมุมมองที่สร้างขึ้นโดย <code>Table.View</code><br />ตัวจัดการ <code>OnInvoke</code> ของ <code>Table.View</code> สามารถใช้เพื่อกําหนดตัวจัดการสําหรับฟังก์ชันมุมมองได้<br />เช่นเดียวกับตัวจัดการสําหรับการดําเนินการในตัว ถ้าไม่มีการระบุตัวจัดการ <code>OnInvoke</code> หรือถ้าไม่จัดการฟังก์ชันมุมมอง หรือถ้ามีข้อผิดพลาดเกิดขึ้นจากตัวจัดการ <code>function</code> จะถูกนําไปใช้ที่ด้านบนของมุมมอง<br />ดูคู่มือตัวเชื่อมต่อแบบกําหนดเองของ Power Query ที่เผยแพร่สําหรับคําอธิบายที่สมบูรณ์ยิ่งขึ้นของ <code>Table.View</code> และฟังก์ชันมุมมองแบบกําหนดเอง<br />



## Category
Table.Table construction
