---
title: Type.ForFunction
---

# Type.ForFunction


## Description

ส่งกลับชนิดซึ่งแสดงฟังก์ชันที่มีพารามิเตอร์เฉพาะและข้อจำกัดชนิดการส่งกลับ


## Syntax

```powerquery
Type.ForFunction(
    signature as record,
    min as number
) as type
```


## Details

สร้าง <code>function type</code> จาก <code>signature</code> ระเบียนของ <code>ReturnType</code>และ <code>Parameters</code> และ <code>min</code> ซึ่งเป็นจำนวนอาร์กิวเมนต์น้อยที่สุดที่ต้องการเพื่อจะเรียกใช้ฟังก์ชันนี้


## Examples

### Example #1 
สร้างชนิดสำหรับฟังก์ชันที่ใช้พารามิเตอร์ตัวเลขชื่อ X และส่งกลับตัวเลข
```powerquery
Type.ForFunction([ReturnType = type number, Parameters = [X = type number]], 1)
```

Result: 
```powerquery
type function (X as number) as number
```




## Category
Type
