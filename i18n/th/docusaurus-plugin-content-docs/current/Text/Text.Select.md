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

ส่งกลับสำเนาของค่าข้อความ <code>text</code> ที่เอาอักขระทั้งหมดที่ไม่อยู่ใน <code>selectChars</code> ออก


## Examples

### Example #1 
เลือกอักขระทั้งหมดในช่วงของ &#39;a&#39; ถึง &#39;z&#39; จากค่าข้อความ
```powerquery
Text.Select("a,b;c", {"a".."z"})
```

Result: 
```powerquery
"abc"
```




## Category
Text.Modification
