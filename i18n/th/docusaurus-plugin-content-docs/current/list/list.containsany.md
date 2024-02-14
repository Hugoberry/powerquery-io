---
title: List.ContainsAny
---

# List.ContainsAny


ระบุตำแหน่งที่รายการมีค่าใดๆ ในรายการอื่น


## Syntax

```powerquery
List.ContainsAny(
    list as list,
    values as list,
    optional equationCriteria as any
) as logical
```


## Remarks

ระบุว่ารายการ <code>list</code> มีค่าใดๆ ในรายการอื่นหรือไม่ <code>values</code>        ส่งกลับเป็น true ถ้าพบค่าในรายการ หรือส่งเป็น false หากไม่เป็นเช่นนั้น โดยสามารถระบุค่าเกณฑ์สมการที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน 


## Examples

### Example #1 
ค้นหาว่ารายการ \{1, 2, 3, 4, 5} มี 3 หรือ 9 หรือไม่
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {3, 9})
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่ารายการ \{1, 2, 3, 4, 5} มี 6 หรือ 7 หรือไม่
```powerquery
List.ContainsAny({1, 2, 3, 4, 5}, {6, 7})
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
