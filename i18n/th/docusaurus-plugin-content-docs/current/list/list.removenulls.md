---
title: List.RemoveNulls
---

# List.RemoveNulls


เอาค่า "null" ทั้งหมดออกจากรายการที่ระบุ


## Syntax

```powerquery
List.RemoveNulls(
    list as list
) as list
```


## Remarks

เอาการปรากฏทั้งหมดของค่า "null" ใน `list` ออก ถ้าไม่มีค่า 'null' ในรายการ จะมีการส่งกลับรายการเดิม


## Examples

### Example #1
เอาค่า "null" ออกจากรายการ \{1, 2, 3, null, 4, 5, null, 6\}
```powerquery
List.RemoveNulls({1, 2, 3, null, 4, 5, null, 6})
```

Result: 
```powerquery
{1, 2, 3, 4, 5, 6}
```




## Category
List.Transformation functions
