---
title: Text.InferNumberType
---

# Text.InferNumberType


อนุมานชนิดตัวเลขแกรนูลาร์ (Int64.Type, Double.Type และอื่นๆ) ของตัวเลขที่เข้ารหัสในข้อความ


## Syntax

```powerquery
Text.InferNumberType(
    text as text,
    optional culture as text
) as type
```


## Remarks

อนุมานชนิดตัวเลขแกรนูลาร์ (Int64.Type, Double.Type และอื่นๆ) ของ `text` มีข้อผิดพลาดเกิดขึ้น ถ้า `text` ไม่ใช่ตัวเลข นอกจากนี้อาจมี `culture` เพิ่มเติม (ตัวอย่างเช่น "en-US")



## Category
Text
