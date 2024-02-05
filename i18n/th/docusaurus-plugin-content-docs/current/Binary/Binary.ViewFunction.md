---
title: Binary.ViewFunction
---

# Binary.ViewFunction


## Description

สร้างฟังก์ชันที่ตัวจัดการที่กําหนดในมุมมองสามารถขัดขวางได้ (ผ่าน Binary.View)


## Syntax

```powerquery
Binary.ViewFunction(
    function as function
) as function
```


## Details

สร้างฟังก์ชันมุมมองตาม <code>function</code> ที่สามารถจัดการได้ในมุมมองที่สร้างขึ้นโดย <code>Binary.View</code><br />ตัวจัดการ <code>OnInvoke</code> ของ <code>Binary.View</code> สามารถใช้เพื่อกําหนดตัวจัดการสําหรับฟังก์ชันมุมมอง<br />เช่นเดียวกับตัวจัดการสําหรับการดําเนินการในตัว ถ้าไม่มีการระบุตัวจัดการ <code>OnInvoke</code> หรือถ้าไม่มีการจัดการฟังก์ชันมุมมอง หรือถ้ามีข้อผิดพลาดเกิดขึ้นจากตัวจัดการ <code>function</code> จะถูกนําไปใช้ที่ด้านบนของมุมมอง<br />อ้างอิงคู่มือ Custom Connector ของ Power Query ที่เผยแพร่สําหรับคําอธิบายที่สมบูรณ์เพิ่มเติมของ <code>Binary.View</code> และฟังก์ชันมุมมองแบบกําหนดเอง<br />



## Category
Binary
