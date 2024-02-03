---
title: List.Intersect
---

# List.Intersect


## Description

ส่งกลับส่วนที่ซ้ำกันของค่ารายการที่พบในค่าที่ป้อน


## Syntax

```powerquery
List.Intersect(
    lists as list,
    optional equationCriteria as any
) as list
```


## Details

ส่งกลับส่วนที่ซ้ำกันของค่ารายการที่พบในรายการค่าที่ป้อน <code>lists</code> พารามิเตอร์ที่เลือกได้ <code>equationCriteria</code> สามารถระบุได้


## Examples

### Example #1 
หาส่วนที่ซ้ำกันของรายการ \{1..5}, \{2..6}, \{3..7}
```powerquery
List.Intersect({{1..5}, {2..6}, {3..7}})
```

Result: 
```powerquery
{3, 4, 5}
```




## Category
List.Set operations
