---
title: Text.TrimStart
---

# Text.TrimStart


## Description

เอาช่องว่างนำหน้าทั้งหมดออก


## Syntax

```powerquery
Text.TrimStart(
    text as text,
    optional trim as any
) as text
```


## Details

ส่งกลับผลลัพธ์ของการเอาช่องว่างนำหน้าทั้งหมดออกจากค่าข้อความ <code>text</code>


## Examples

### Example #1 
เอาช่องว่างนำหน้าออกจาก &#34;     a b c d    &#34;
```powerquery
Text.TrimStart("   a b c d    ")
```

Result: 
```powerquery
"a b c d    "
```




## Category
Text.Transformations
