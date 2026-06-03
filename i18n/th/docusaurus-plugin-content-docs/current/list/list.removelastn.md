---
title: List.RemoveLastN
---

# List.RemoveLastN


ส่งกลับรายการซึ่งเอาจำนวนที่ระบุขององค์ประกอบออกจากจุดสิ้นสุดของรายการ


## Syntax

```powerquery
List.RemoveLastN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

ส่งกลับรายการที่ลบองค์ประกอบ `countOrCondition` สุดท้ายออกจากจุดสิ้นสุดของรายการ `list` ถ้า `list` มีองค์ประกอบน้อยกว่า `countOrCondition` รายการที่ว่างเปล่าจะถูกส่งกลับ

-   ถ้ามีการระบุตัวเลข จะมีการลบรายการออกไม่เกินจำนวนนั้น
-   ถ้ามีการระบุเงื่อนไข รายการที่ตรงกันที่อยู่ติดกันใดๆ ที่จุดสิ้นสุดของ `list` จะถูกลบออก
-   ถ้าพารามิเตอร์นี้เป็น null จะมีการลบออกเพียงรายการเดียวเท่านั้น


## Examples

### Example #1
สร้างรายการจาก \{1, 2, 3, 4, 5\} โดยไม่มี 3 จำนวนสุดท้าย
```powerquery
List.RemoveLastN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
สร้างรายการจาก \{5, 4, 2, 6, 4\} ที่สิ้นสุดด้วยจำนวนที่น้อยกว่า 3
```powerquery
List.RemoveLastN({5, 4, 2, 6, 4}, each _ > 3)
```

Result: 
```powerquery
{5, 4, 2}
```




## Category
List.Transformation functions
