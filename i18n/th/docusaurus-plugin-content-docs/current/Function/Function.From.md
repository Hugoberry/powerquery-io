---
title: Function.From
---

# Function.From


## Description

สร้างฟังก์ชันที่มีลายเซ็นพารามิเตอร์เฉพาะที่อยู่ด้านบนฟังก์ชันที่ใช้อาร์กิวเมนต์แบบรายการเดียว


## Syntax

```powerquery
Function.From(
    functionType as type,
    function as function
) as function
```


## Details

ใช้ฟังก์ชัน unary <code>function</code> และสร้างฟังก์ชันใหม่ด้วยชนิด <code>functionType</code> ที่สร้างรายการจากอาร์กิวเมนต์และส่งผ่านไปยัง <code>function</code>


## Examples

### Example #1 
แปลง List.Sum เป็นฟังก์ชันแบบสองอาร์กิวเมนต์ที่อาร์กิวเมนต์จะถูกรวมเข้าด้วยกัน
```powerquery
Function.From(type function (a as number, b as number) as number, List.Sum)(2, 1)
```

Result: 
```powerquery
3
```


### Example #2 
แปลงฟังก์ชันโดยใช้รายการเป็นฟังก์ชันแบบสองอาร์กิวเมนต์
```powerquery
Function.From(type function (a as text, b as text) as text, (list) => list{0} & list{1})("2", "1")
```

Result: 
```powerquery
"21"
```




## Category
Function
