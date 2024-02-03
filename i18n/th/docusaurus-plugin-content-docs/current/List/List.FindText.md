---
title: List.FindText
---

# List.FindText


## Description

ส่งกลับรายการค่า (รวมถึงเขตข้อมูลระเบียน) ที่มีข้อความที่ระบุ


## Syntax

```powerquery
List.FindText(
    list as list,
    text as text
) as list
```


## Details

ส่งกลับรายการของค่าจากรายการ <code>list</code> ที่มีค่า <code>text</code>


## Examples

### Example #1 
ค้นหาค่าในรายการ \{&#34;a&#34;, &#34;b&#34;, &#34;ab&#34;} ที่ตรงกับ &#34;a&#34; 
```powerquery
List.FindText({"a", "b", "ab"}, "a")
```

Result: 
```powerquery
{"a", "ab"}
```




## Category
List.Selection
