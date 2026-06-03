---
title: Text.At
---

# Text.At


ส่งกลับอักขระในตำแหน่งที่ระบุ


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Remarks

ส่งกลับอักขระในค่าข้อความ `text` ที่ตำแหน่ง `index` อักขระแรกในข้อความอยู่ที่ตำแหน่ง 0


## Examples

### Example #1
ค้นหาอักขระที่ตำแหน่ง 4 ในสตริง "Hello, World"
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
