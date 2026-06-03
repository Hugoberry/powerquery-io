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

ส่งกลับค่า `text` ที่เป็นอักขระ `count` สุดท้ายของค่า `text` `text`


## Examples

### Example #1
รับ 5 อักขระล่าสุดของข้อความ "Hello, World"
```powerquery
Text.End("Hello, World", 5)
```

Result: 
```powerquery
"World"
```




## Category
Text.Extraction
