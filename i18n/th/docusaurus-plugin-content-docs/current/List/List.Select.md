---
title: List.Select
---

# List.Select


## Description

ส่งกลับรายการของค่าที่ตรงกับเงื่อนไข


## Syntax

```powerquery
List.Select(
    list as list,
    selection as function
) as list
```


## Details

ส่งกลับรายการของค่าจากรายการ <code>list</code> ที่ตรงกับเงื่อนไขการเลือก <code>selection</code>


## Examples

### Example #1 
ค้นหาค่าในรายการ \{1, -3, 4, 9, -2} ที่มากกว่า 0
```powerquery
List.Select({1, -3, 4, 9, -2}, each _ > 0)
```

Result: 
```powerquery
{1, 4, 9}
```




## Category
List.Selection
