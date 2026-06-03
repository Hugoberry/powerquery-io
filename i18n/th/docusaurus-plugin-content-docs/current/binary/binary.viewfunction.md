---
title: Binary.ViewFunction
---

# Binary.ViewFunction


สร้างฟังก์ชันที่ตัวจัดการที่กําหนดในมุมมองสามารถขัดขวางได้ (ผ่าน Binary.View)


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Remarks

สร้างฟังก์ชันมุมมองตาม `function` ที่สามารถจัดการได้ในมุมมองที่สร้างขึ้นโดย `Binary.View`

ตัวจัดการ `OnInvoke` ของ `Binary.View` สามารถใช้เพื่อกําหนดตัวจัดการสําหรับฟังก์ชันมุมมอง

เช่นเดียวกับตัวจัดการสําหรับการดําเนินการในตัว ถ้าไม่มีการระบุตัวจัดการ `OnInvoke` หรือถ้าไม่มีการจัดการฟังก์ชันมุมมอง หรือถ้ามีข้อผิดพลาดเกิดขึ้นจากตัวจัดการ `function` จะถูกนําไปใช้ที่ด้านบนของมุมมอง

อ้างอิงคู่มือ Custom Connector ของ Power Query ที่เผยแพร่สําหรับคําอธิบายที่สมบูรณ์เพิ่มเติมของ `Binary.View` และฟังก์ชันมุมมองแบบกําหนดเอง



## Category
Binary
