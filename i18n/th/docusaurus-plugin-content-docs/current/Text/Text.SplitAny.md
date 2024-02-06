---
title: Text.SplitAny
---

# Text.SplitAny


ส่งกลับรายการค่าข้อความที่แยกบนอักขระใดๆ ในตัวคั่น


## Syntax

```powerquery
Text.SplitAny(
    text as text,
    separators as text
) as list
```


## Remarks

ส่งกลับรายการค่าข้อความที่เป็นผลลัพธ์จากการแยกค่าข้อความ <code>text</code> ตามอักขระใดๆ ในตัวคั่นที่ระบุ <code>separators</code>


## Examples

### Example #1 
สร้างรายการจากค่าข้อความ &#34;Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com&#34;
```powerquery
Text.SplitAny("Jamie|Campbell|Admin|Adventure Works|www.adventure-works.com", "|")
```

Result: 
```powerquery
{
    "Jamie",
    "Campbell",
    "Admin",
    "Adventure Works",
    "www.adventure-works.com"
}
```




## Category
Text.Transformations
