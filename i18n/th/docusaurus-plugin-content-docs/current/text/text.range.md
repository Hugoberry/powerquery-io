---
title: Text.Range
---

# Text.Range


ส่งกลับสตริงย่อยที่พบในออฟเซต


## Syntax

```powerquery
Text.Range(
    text as text,
    offset as number,
    optional count as number
) as text
```


## Remarks

ส่งคืนสตริงย่อยจากข้อความ `text` ที่พบในออฟเซต `offset` โดยสามารถรวมพารามิเตอร์ที่เลือกได้ `count` เพื่อระบุจำนวนอักขระที่จะส่งคืน แสดงข้อผิดพลาดถ้าไม่มีจำนวนอักขระเพียงพอ


## Examples

### Example #1
ค้นหาสตริงย่อยจากข้อความ "Hello World" โดยเริ่มต้นที่ดัชนี 6
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2
ค้นหาสตริงย่อยจากข้อความ "Hello World Hello" เริ่มต้นที่ดัชนี 6 โดยขยายออกไป 5 อักขระ
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
