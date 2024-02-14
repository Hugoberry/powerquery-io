---
title: Text.Start
---

# Text.Start


ส่งกลับจุดเริ่มต้นของข้อความ


## Syntax

```powerquery
Text.Start(
    text as text,
    count as number
) as text
```


## Remarks

ส่งกลับอักขระ <code>count</code> ตัวแรกของ <code>text</code> เป็นค่าข้อความ


## Examples

### Example #1 
รับอักขระ 5 ตัวแรกของ &#34;Hello, World&#34;
```powerquery
Text.Start("Hello, World", 5)
```

Result: 
```powerquery
"Hello"
```




## Category
Text.Extraction
