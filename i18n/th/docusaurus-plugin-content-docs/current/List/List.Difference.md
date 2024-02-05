---
title: List.Difference
---

# List.Difference


## Description

ส่งกลับความแตกต่างของสองรายการที่ระบุ


## Syntax

```powerquery
List.Difference(
    list1 as list,
    list2 as list,
    optional equationCriteria as any
) as list
```


## Details

ส่งคืนข้อมูลในรายการ <code>list1</code> ที่ไม่ปรากฏในรายการ <code>list2</code> สนับสนุนค่าซ้ำ    โดยสามารถระบุค่าเกณฑ์สมการที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน 


## Examples

### Example #1 
ค้นหาข้อมูลในรายการ \{1, 2, 3, 4, 5} ที่ไม่ปรากฏใน \{4, 5, 3}
```powerquery
List.Difference({1, 2, 3, 4, 5}, {4, 5, 3})
```

Result: 
```powerquery
{1, 2}
```


### Example #2 
ค้นหาข้อมูลในรายการ \{1, 2} ที่ไม่ปรากฏใน \{1, 2, 3}
```powerquery
List.Difference({1, 2}, {1, 2, 3})
```

Result: 
```powerquery
{}
```




## Category
List.Set operations
