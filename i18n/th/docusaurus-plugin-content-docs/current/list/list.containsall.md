---
title: List.ContainsAll
---

# List.ContainsAll


ระบุตำแหน่งที่รายการมีค่าทั้งหมดในรายการอื่น


## Syntax

```powerquery
List.ContainsAll(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

ระบุว่ารายการ <code>list</code> มีค่าทั้งหมดในรายการอื่นหรือไม่ <code>values</code>    ส่งกลับเป็น true ถ้าพบค่าในรายการ หรือส่งเป็น false หากไม่เป็นเช่นนั้น โดยสามารถระบุค่าเกณฑ์สมการที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน 


## Examples

### Example #1 
ค้นหาว่ารายการ \{1, 2, 3, 4, 5} มี 3 และ 4 หรือไม่
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {3, 4})
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่ารายการ \{1, 2, 3, 4, 5} มี 5 และ 6 หรือไม่
```powerquery
List.ContainsAll({1, 2, 3, 4, 5}, {5, 6})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
