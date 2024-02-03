---
title: List.Contains
---

# List.Contains


## Description

ระบุว่ารายการมีค่าหรือไม่


## Syntax

```powerquery
List.Contains(
    list as list,
    value as any,
    optional equationCriteria as any
) as logical
```


## Details

ระบุว่ารายการ <code>list</code> มีค่า <code>value</code> หรือไม่    ส่งกลับเป็น จริง ถ้าพบค่าในรายการ หรือส่งเป็น เท็จ หากไม่เป็นเช่นนั้น โดยสามารถระบุค่าเกณฑ์สมการที่เลือกได้ <code>equationCriteria</code> เพื่อควบคุมการทดสอบความเท่ากัน 


## Examples

### Example #1 
ค้นหาว่ารายการ \{1, 2, 3, 4, 5} มี 3 หรือไม่
```powerquery
List.Contains({1, 2, 3, 4, 5}, 3)
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่ารายการ \{1, 2, 3, 4, 5} มี 6 หรือไม่
```powerquery
List.Contains({1, 2, 3, 4, 5}, 6)
```

Result: 
```powerquery
false
```




## Category
List.Membership functions
