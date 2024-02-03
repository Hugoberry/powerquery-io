---
title: Text.ReplaceRange
---

# Text.ReplaceRange


## Description

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


## Details

ส่งกลับผลลัพธ์ของการเอาจำนวนอักขระออก <code>count</code> จากค่าข้อความ <code>text</code> โดยเริ่มต้นที่ตำแหน่ง <code>offset</code> ตามด้วยการแทรกค่าข้อความ <code>newText</code> ที่ตำแหน่งเดิมใน <code>text</code>


## Examples

### Example #1 
แทนที่อักขระเดียวที่ตำแหน่ง 2 ในค่าข้อความ &#34;ABGF&#34; ด้วยค่าข้อความใหม่ &#34;CDE&#34;
```powerquery
Text.ReplaceRange("ABGF", 2, 1, "CDE")
```

Result: 
```powerquery
"ABCDEF"
```




## Category
Text.Modification
