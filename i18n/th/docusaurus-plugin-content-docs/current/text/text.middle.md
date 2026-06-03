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

ส่งคืนตัวอักขระ `count` หรือเมื่อสิ้นสุด `text` ที่ออฟเซ็ต `start`


## Examples

### Example #1
ค้นหาสตริงย่อยจากข้อความ "Hello World" เริ่มต้นที่ดัชนี 6 เป็นจำนวน 5 ตัวอักขระ
```powerquery
Text.Middle("Hello World", 6, 5)
```

Result: 
```powerquery
"World"
```


### Example #2
ค้นหาสตริงย่อยจากข้อความ "Hello World" เริ่มต้นที่ดัชนี 6 ไปจนสุด
```powerquery
Text.Middle("Hello World", 6, 20)
```

Result: 
```powerquery
"World"
```


### Example #3
ค้นหาสตริงย่อยจากข้อความ “สวัสดี ทุกท่าน” เริ่มต้นที่ดัชนี 0 เป็นจำนวนอักขระ 2 ตัว
```powerquery
Text.Middle("Hello World", 0, 2)
```

Result: 
```powerquery
"He"
```




## Category
Text.Extraction
