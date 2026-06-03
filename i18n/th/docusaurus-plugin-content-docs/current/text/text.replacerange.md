---
title: Text.ReplaceRange
---

# Text.ReplaceRange


เอาช่วงอักขระออกและแทรกค่าใหม่ในตำแหน่งที่ระบุ


## Syntax

```powerquery
Text.ReplaceRange(
    text as text,
    offset as number,
    count as number,
    newText as text
) as text
```


## Remarks

ส่งกลับผลลัพธ์ของการเอาจำนวนอักขระออก `count` จากค่าข้อความ `text` โดยเริ่มต้นที่ตำแหน่ง `offset` ตามด้วยการแทรกค่าข้อความ `newText` ที่ตำแหน่งเดิมใน `text`


## Examples

### Example #1
แทนที่อักขระเดียวที่ตำแหน่ง 2 ในค่าข้อความ "ABGF" ด้วยค่าข้อความใหม่ "CDE"
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
