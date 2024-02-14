---
title: List.RemoveMatchingItems
---

# List.RemoveMatchingItems


เอาการปรากฏทั้งหมดของค่าที่ป้อนออก


## Syntax

```powerquery
List.RemoveMatchingItems(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Remarks

เอาการปรากฏทั้งหมดของค่าที่กำหนดให้ใน <code>list2</code> ออกจากรายการ <code>list1</code> ถ้าค่าใน <code>list2</code> ไม่มีอยู่ใน <code>list1</code> จะมีการส่งกลับรายการเดิม    โดยสามารถระบุค่าเกณฑ์สมการที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน 


## Examples

### Example #1 
สร้างรายการจาก \{1, 2, 3, 4, 5, 5} โดยไม่มี \{1, 5}
```powerquery
List.RemoveMatchingItems({1, 2, 3, 4, 5, 5}, {1, 5})
```

Result: 
```powerquery
{2, 3, 4}
```




## Category
List.Transformation functions
