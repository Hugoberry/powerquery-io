---
title: List.Single
---

# List.Single


ส่งกลับหนึ่งข้อมูลในรายการสําหรับรายการที่มีความยาวหนึ่ง มิฉะนั้นจะแสดงข้อผิดพลาด


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

ถ้ามีเพียงข้อมูลเดียวในรายการ `list` ให้ส่งกลับข้อมูลนั้น ถ้ามีข้อมูลมากกว่าหนึ่งรายการหรือรายการว่างเปล่า ฟังก์ชันจะแสดงข้อผิดพลาด


## Examples

### Example #1
ค้นหาค่าเดียวในรายการ \{1\}
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2
ค้นหาค่าเดียวในรายการ \{1, 2, 3\}
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
