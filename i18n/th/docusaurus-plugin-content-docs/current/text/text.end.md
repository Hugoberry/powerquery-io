---
title: Text.End
---

# Text.End


ส่งกลับอักขระสุดท้ายของข้อความ


## Syntax

```powerquery
Text.End(
    text as text,
    count as number
) as text
```


## Remarks

ส่งกลับค่า <code>text</code> ที่เป็นอักขระ <code>count</code> สุดท้ายของค่า <code>text</code> <code>text</code>


## Examples

### Example #1 
รับ 5 อักขระล่าสุดของข้อความ &#34;Hello, World&#34;
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
