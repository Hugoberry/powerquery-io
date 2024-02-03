---
title: List.RemoveLastN
---

# List.RemoveLastN


## Description

ส่งกลับรายการซึ่งเอาจำนวนที่ระบุขององค์ประกอบออกจากจุดสิ้นสุดของรายการ


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Details

ส่งกลับรายการซึ่งเอาองค์ประกอบ <code>countOrCondition</code>สุดท้ายออกจากจุดสิ้นสุดของรายการ <code>list</code>ถ้า <code>list</code> น้อยกว่า <code>countOrCondition</code> องค์ประกอบ จะมีการส่งกลับรายการที่ว่างเปล่า <ul> <li>ถ้ามีการระบุจำนวน จะมีการเอาหลายข้อมูลออกได้สูงสุดตามจำนวนดังกล่าว</li> <li>ถ้ามีการระบุเงื่อนไข รายการที่ส่งกลับจะสิ้นสุดด้วยองค์ประกอบแรกจากด้านล่างสุดใน <code>list</code> ที่ตรงกับเงื่อนไขนั้นเมื่อรายการใดรายการหนึ่งไม่เป็นไปตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป</li> <li>ถ้าพารามิเตอร์เป็น Null จะมีการลบออกเพียงรายการเดียว</li> </ul>


## Examples

### Example #1 
สร้างรายการจาก \{1, 2, 3, 4, 5} โดยไม่มี 3 จำนวนสุดท้าย
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
สร้างรายการจาก \{5, 4, 2, 6, 4} ที่สิ้นสุดด้วยจำนวนที่น้อยกว่า 3
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
