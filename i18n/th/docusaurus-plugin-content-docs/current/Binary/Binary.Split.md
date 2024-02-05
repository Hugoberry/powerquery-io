---
title: Binary.Split
---

# Binary.Split


## Description

แยกไบนารีที่ระบุให้เป็นรายการไบนารีที่ใช้ขนาดหน้ากระดาษที่ระบุ


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Details

แยก <code>binary</code> ลงในรายการไบนารีที่องค์ประกอบแรกของรายการผลลัพธ์เป็นไบนารีที่มี <code>pageSize</code> ไบต์แรกจาก    ไบนารีต้นทาง องค์ประกอบถัดไปของรายการผลลัพธ์คือไบนารีที่ประกอบด้วย <code>pageSize</code> ไบต์ถัดไปจากไบนารีต้นทาง และอื่นๆ



## Category
Binary
