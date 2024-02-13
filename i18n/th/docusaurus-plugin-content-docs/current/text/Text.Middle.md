---
title: Text.Middle
---

# Text.Middle


ส่งคืนสตริงย่อยตามความยาวสูงสุดที่ระบุไว้


## Syntax

```powerquery
Text.Middle(
    text as text,
    start as number,
    optional count as number
) as text
```


## Remarks

ส่งคืนตัวอักขระ <code>count</code> หรือเมื่อสิ้นสุด <code>text</code> ที่ออฟเซ็ต <code>start</code>


## Examples

### Example #1 
ค้นหาสตริงย่อยจากข้อความ &#34;Hello World&#34; เริ่มต้นที่ดัชนี 6 เป็นจำนวน 5 ตัวอักขระ
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2 
ค้นหาสตริงย่อยจากข้อความ &#34;Hello World&#34; เริ่มต้นที่ดัชนี 6 ไปจนสุด
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
