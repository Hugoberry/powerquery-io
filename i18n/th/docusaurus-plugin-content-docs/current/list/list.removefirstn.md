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

ส่งกลับรายการที่จะเอาองค์ประกอบแรกของรายการ <code>list</code> ออกถ้า <code>list</code> เป็นรายการที่ว่างเปล่า จะมีการส่งกลับรายการที่ว่างเปล่าฟังก์ชันนี้จะใช้พารามิเตอร์ที่เลือกได้ <code>countOrCondition</code> เพื่อสนับสนุนการเอาหลายค่าออกตามที่แสดงรายการด้านล่าง <ul> <li>ถ้ามีการระบุจำนวน จะมีการเอาหลายข้อมูลออกได้สูงสุดตามจำนวนดังกล่าว</li> <li>ถ้ามีการระบุเงื่อนไข รายการที่ส่งกลับจะเริ่มต้นด้วยองค์ประกอบแรกใน <code>list</code> ที่ตรงกับเงื่อนไขนั้น เมื่อรายการใดรายการหนึ่งไม่เป็นไปตามเงื่อนไข จะไม่มีการพิจารณารายการถัดไป </li> <li>ถ้าพารามิเตอร์เป็น null จะมีการปฏิบัติตามลักษณะการทำงานเริ่มต้น </li> </ul>


## Examples

### Example #1 
สร้างรายการจาก \{1, 2, 3, 4, 5} โดยไม่มี 3 จำนวนแรก
```powerquery
List.RemoveFirstN({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
{4, 5}
```


### Example #2 
สร้างรายการจาก \{5, 4, 2, 6, 1} ที่เริ่มต้นด้วยจำนวนที่น้อยกว่า 3
```powerquery
List.RemoveFirstN({5, 4, 2, 6, 1}, each _ > 3)
```

Result: 
```powerquery
{2, 6, 1}
```




## Category
List.Transformation functions
