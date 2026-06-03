---
title: List.RemoveFirstN
---

# List.RemoveFirstN


ส่งกลับรายการซึ่งข้ามจำนวนที่ระบุขององค์ประกอบที่จุดเริ่มต้นของรายการ


## Syntax

```powerquery
List.RemoveFirstN(
    list as list,
    optional countOrCondition as any
) as list
```


## Remarks

ส่งกลับรายการที่ลบองค์ประกอบแรกของรายการออก`list` ถ้า `list` เป็นรายการว่างเปล่า รายการที่ว่างเปล่าจะถูกส่งกลับ ฟังก์ชันนี้ใช้พารามิเตอร์ที่เลือกได้ `countOrCondition` เพื่อสนับสนุนการลบค่าหลายค่าตามที่แสดงด้านล่าง

-   ถ้ามีการระบุตัวเลข จะมีการลบรายการออกไม่เกินจำนวนนั้น
-   ถ้ามีการระบุเงื่อนไข รายการที่ตรงกันที่อยู่ติดกันใดๆ ที่จุดเริ่มต้นของ `list` จะถูกลบออก
-   ถ้าพารามิเตอร์นี้เป็น null ลักษณะการทํางานเริ่มต้นจะสามารถสังเกตได้


## Examples

### Example #1
สร้างรายการจาก \{1, 2, 3, 4, 5\} โดยไม่มี 3 จำนวนแรก
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2
สร้างรายการจาก \{5, 4, 2, 6, 1\} ที่เริ่มต้นด้วยจำนวนที่น้อยกว่า 3
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
