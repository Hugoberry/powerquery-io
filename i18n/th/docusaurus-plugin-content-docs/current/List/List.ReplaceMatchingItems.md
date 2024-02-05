---
title: List.ReplaceMatchingItems
---

# List.ReplaceMatchingItems


## Description

นำการแทนที่แต่ละรายการของ \{ old, new } ไปใช้


## Syntax

```powerquery
List.ReplaceMatchingItems(
    list as list,
    replacements as list,
    optional equationCriteria as any
) as list
```


## Details

ดำเนินการแทนที่ที่กำหนดให้ไปยังรายการ <code>list</code> การดำเนินการแทนที่ <code>replacements</code> ประกอบด้วยรายการที่มีสองค่า ได้แก่ค่าเดิมและค่าใหม่ ที่ระบุไว้ในรายการ    โดยสามารถระบุค่าเกณฑ์สมการที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน


## Examples

### Example #1 
สร้างรายการจาก \{1, 2, 3, 4, 5} แทนที่ค่า 5 ด้วย -5 และค่า 1 ด้วย -1
```powerquery
List.ReplaceMatchingItems({1, 2, 3, 4, 5}, {{5, -5}, {1, -1}})
```

Result: 
```powerquery
{-1, 2, 3, 4, -5}
```




## Category
List.Transformation functions
