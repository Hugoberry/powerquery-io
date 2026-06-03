---
title: List.Transform
---

# List.Transform


ส่งกลับรายการค่าใหม่ที่คำนวณจากรายการนี้


## Syntax

```powerquery
List.Transform(
    list as list,
    transform as function
) as list
```


## Remarks

ส่งกลับรายการค่าใหม่โดยการนำฟังก์ชันการแปลง `transform` ไปใช้กับรายการ `list`


## Examples

### Example #1
เพิ่ม 1 ลงในแต่ละค่าในรายการ \{1, 2\}
```powerquery
List.Transform({1, 2}, each _ + 1)
```

Result: 
```powerquery
{2, 3}
```




## Category
List.Transformation functions
