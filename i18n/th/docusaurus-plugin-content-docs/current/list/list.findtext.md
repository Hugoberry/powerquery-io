---
title: List.FindText
---

# List.FindText


ส่งกลับรายการค่า (รวมถึงเขตข้อมูลระเบียน) ที่มีข้อความที่ระบุ


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Remarks

ส่งกลับรายการของค่าจากรายการ `list` ที่มีค่า `text`


## Examples

### Example #1
ค้นหาค่าในรายการ \{"a", "b", "ab"\} ที่ตรงกับ "a"
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
