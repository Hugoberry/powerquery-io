---
title: List.SingleOrDefault
---

# List.SingleOrDefault


## Description

ส่งกลับหนึ่งข้อมูลในรายการสำหรับรายการที่มีความยาวเป็นหนึ่ง และค่าเริ่มต้นสำหรับรายการที่ว่างเปล่า


## Syntax

```powerquery
List.SingleOrDefault(
    list as list,
    optional default as any
) as any
```


## Details

ถ้ามีเพียงข้อมูลเดียวในรายการ <code>list</code> ให้ส่งกลับข้อมูลนั้น    ถ้ารายการว่างเปล่า ฟังก์ชันจะส่งกลับ null เว้นแต่จะมีการระบุ <code>default</code> เพิ่มเติม ถ้าในรายการมีมากกว่าหนึ่งข้อมูล ฟังก์ชันจะส่งกลับข้อผิดพลาด


## Examples

### Example #1 
ค้นหาค่าเดียวในรายการ \{1}
```powerquery
List.SingleOrDefault({1})
```

Result: 
```powerquery
1
```


### Example #2 
ค้นหาค่าเดียวในรายการ \{}
```powerquery
List.SingleOrDefault({})
```

Result: 
```powerquery
null
```


### Example #3 
ค้นหาค่าเดียวในรายการ \{} ถ้ารายการว่างเปล่า ให้ส่งกลับ -1
```powerquery
List.SingleOrDefault({}, -1)
```

Result: 
```powerquery
-1
```




## Category
List.Selection
