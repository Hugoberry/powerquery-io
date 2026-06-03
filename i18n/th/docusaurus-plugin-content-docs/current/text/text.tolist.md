---
title: Text.ToList
---

# Text.ToList


ส่งกลับรายการค่าอักขระจากค่าข้อความที่กำหนด


## Syntax

```powerquery
Text.ToList(
    text as text
) as list
```


## Remarks

ส่งกลับรายการค่าอักขระจากค่าข้อความ `text` ที่กำหนด


## Examples

### Example #1
สร้างรายการค่าอักขระจากข้อความ "Hello World"
```powerquery
Text.ToList("Hello World")
```

Result: 
```powerquery
{
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "W",
    "o",
    "r",
    "l",
    "d"
}
```




## Category
Text.Conversions from and to text
