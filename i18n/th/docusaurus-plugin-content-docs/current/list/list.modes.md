---
title: List.Modes
---

# List.Modes


ส่งกลับรายการของค่าที่ใช้บ่อยที่สุดในรายการ


## Syntax

```powerquery
List.Modes(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

ส่งกลับรายการที่ปรากฏบ่อยที่สุดใน `list` ถ้ารายการว่างเปล่า แสดงว่ามีข้อผิดพลาดเกิดขึ้น ถ้ามีหลายรายการปรากฏขึ้นด้วยความถี่สูงสุดเดียวกัน รายการทั้งหมดจะถูกส่งกลับ สามารถระบุค่าเกณฑ์การเปรียบเทียบเพิ่มเติม `equationCriteria` เพื่อควบคุมการทดสอบความเท่ากัน


## Examples

### Example #1
หาข้อมูลที่ปรากฏบ่อยที่สุดในรายการ `{"A", 1, 2, 3, 3, 4, 5, 5}`
```powerquery
List.Modes({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
{3, 5}
```




## Category
List.Averages
