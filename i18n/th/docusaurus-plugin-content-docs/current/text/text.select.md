---
title: Text.Select
---

# Text.Select


เลือกการปรากฏทั้งหมดสำหรับอักขระหรือรายการอักขระที่กำหนดให้จากค่าข้อความที่ป้อนเข้า


## Syntax

```powerquery
Text.Select(
    text as text,
    selectChars as any
) as text
```


## Remarks

ส่งกลับสำเนาของค่าข้อความ `text` ที่เอาอักขระทั้งหมดที่ไม่อยู่ใน `selectChars` ออก


## Examples

### Example #1
เลือกอักขระทั้งหมดในช่วงของ 'a' ถึง 'z' จากค่าข้อความ
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
