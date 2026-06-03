---
title: Text.Insert
---

# Text.Insert


แทรกค่าข้อความหนึ่งลงในอีกค่าในตำแหน่งที่กำหนด


## Syntax

```powerquery
Text.Insert(
    text as text,
    offset as number,
    newText as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการแทรกค่าข้อความ `newText` ลงในค่าข้อความ `text` ที่ตำแหน่ง `offset` ตำแหน่งเริ่มต้นที่ตัวเลข 0


## Examples

### Example #1
แทรก "C" ระหว่าง "B" และ "D" ใน "ABD"
```powerquery
Text.Insert("ABD", 2, "C")
```

Result: 
```powerquery
"ABCD"
```




## Category
Text.Modification
