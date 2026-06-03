---
title: List.Mode
---

# List.Mode


ส่งกลับค่าที่ใช้บ่อยสุดในรายการ


## Syntax

```powerquery
List.Mode(
    list as list,
    optional equationCriteria as any
) as any
```


## Remarks

ส่งกลับรายการที่ปรากฏบ่อยที่สุดใน `list`. ถ้ารายการว่างเปล่า แสดงว่ามีข้อผิดพลาดเกิดขึ้น ถ้ามีหลายรายการปรากฏขึ้นด้วยความถี่สูงสุดเดียวกัน รายการสุดท้ายจะถูกเลือก สามารถระบุค่าเกณฑ์การเปรียบเทียบเพิ่มเติม `equationCriteria` เพื่อควบคุมการทดสอบความเท่ากัน


## Examples

### Example #1
หาข้อมูลที่ปรากฏบ่อยที่สุดในรายการ `{"A", 1, 2, 3, 3, 4, 5}`
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5})
```

Result: 
```powerquery
3
```


### Example #2
หาข้อมูลที่ปรากฏบ่อยที่สุดในรายการ `{"A", 1, 2, 3, 3, 4, 5, 5}`
```powerquery
List.Mode({"A", 1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
5
```




## Category
List.Averages
