---
title: Binary.Split
---

# Binary.Split


แยกไบนารีที่ระบุให้เป็นรายการไบนารีที่ใช้ขนาดหน้ากระดาษที่ระบุ


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

แยก `binary` ลงในรายการไบนารีที่องค์ประกอบแรกของรายการผลลัพธ์เป็นไบนารีที่มี `pageSize` ไบต์แรกจาก ไบนารีต้นทาง องค์ประกอบถัดไปของรายการผลลัพธ์คือไบนารีที่ประกอบด้วย `pageSize` ไบต์ถัดไปจากไบนารีต้นทาง และอื่นๆ



## Category
Binary
