---
title: List.RemoveItems
---

# List.RemoveItems


เอาข้อมูลออกจาก list1 ที่ปรากฏอยู่ในรายการ


## Syntax

```powerquery
List.RemoveItems(
    list1 as list,
    list2 as list
) as list
```


## Remarks

เอาการปรากฏทั้งหมดของค่าที่กำหนดให้ใน `list2` ออกจาก `list1` ถ้าค่าใน `list2` ไม่มีอยู่ใน `list1` จะมีการส่งกลับรายการเดิม


## Examples

### Example #1
เอาข้อมูลในรายการ \{2, 4, 6\} ออกจากรายการ \{1, 2, 3, 4, 2, 5, 5\}
```powerquery
List.RemoveItems({1, 2, 3, 4, 2, 5, 5}, {2, 4, 6})
```

Result: 
```powerquery
{1, 3, 5, 5}
```




## Category
List.Transformation functions
