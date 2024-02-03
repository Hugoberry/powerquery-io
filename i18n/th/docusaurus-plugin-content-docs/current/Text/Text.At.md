---
title: Text.At
---

# Text.At


## Description

ส่งกลับอักขระในตำแหน่งที่ระบุ


## Syntax

```powerquery
Text.At(
    text as text,
    index as number
) as text
```


## Details

ส่งกลับอักขระในค่าข้อความ <code>text</code> ที่ตำแหน่ง <code>index</code> อักขระแรกในข้อความอยู่ที่ตำแหน่ง 0


## Examples

### Example #1 
ค้นหาอักขระที่ตำแหน่ง 4 ในสตริง &#34;Hello, World&#34;
```powerquery
Text.At("Hello, World", 4)
```

Result: 
```powerquery
"o"
```




## Category
Text.Extraction
