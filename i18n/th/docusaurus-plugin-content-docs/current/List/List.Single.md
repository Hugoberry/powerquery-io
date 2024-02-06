---
title: List.Single
---

# List.Single


ส่งกลับหนึ่งข้อมูลในรายการสำหรับรายการที่มีความยาวเป็นหนึ่ง มิฉะนั้นให้แสดงข้อยกเว้น


## Syntax

```powerquery
List.Single(
    list as list
) as any
```


## Remarks

ถ้ามีเพียงข้อมูลเดียวในรายการ <code>list</code> ให้ส่งกลับข้อมูลนั้น     ถ้ามีข้อมูลมากกว่าหนึ่งข้อมูลหรือรายการว่างเปล่า ฟังก์ชันจะแสดงข้อยกเว้น


## Examples

### Example #1 
ค้นหาค่าเดียวในรายการ \{1}
```powerquery
List.Single({1})
```

Result: 
```powerquery
1
```


### Example #2 
ค้นหาค่าเดียวในรายการ \{1, 2, 3}
```powerquery
List.Single({1, 2, 3})
```

Result: 
```powerquery
[Expression.Error] There were too many elements in the enumeration to complete the operation.
```




## Category
List.Selection
