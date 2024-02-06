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

ส่งคืนสตริงย่อยจากข้อความ <code>text</code> ที่พบในออฟเซต <code>offset</code>     โดยสามารถรวมพารามิเตอร์ที่เลือกได้ <code>count</code> เพื่อระบุจำนวนอักขระที่จะส่งคืน จะมีการแสดงข้อผิดพลาดหากมีตัวอักขระไม่เพียงพอ


## Examples

### Example #1 
ค้นหาสตริงย่อยจากข้อความ &#34;Hello World&#34; โดยเริ่มต้นที่ดัชนี 6
```powerquery
Text.Range("Hello World", 6)
```

Result: 
```powerquery
"World"
```


### Example #2 
ค้นหาสตริงย่อยจากข้อความ &#34;Hello World Hello&#34; เริ่มต้นที่ดัชนี 6 โดยขยายออกไป 5 อักขระ
```powerquery
Text.Range("Hello World Hello", 6, 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
