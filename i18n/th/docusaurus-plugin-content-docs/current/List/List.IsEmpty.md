---
title: List.IsEmpty
---

# List.IsEmpty


## Description

ส่งกลับเป็น true ถ้ารายการว่างเปล่า


## Syntax

```powerquery
List.IsEmpty(
    list as list
) as logical
```


## Details

ส่งกลับ <code>true</code> ถ้ารายการ <code>list</code> ไม่มีค่าใดๆ (ความยาว 0) ถ้ารายการมีค่า (ความยาว > 0) จะส่งกลับ <code>false</code>


## Examples

### Example #1 
หาว่ารายการ \{} ว่างเปล่าหรือไม่
```powerquery
List.IsEmpty({})
```

Result: 
```powerquery
true
```


### Example #2 
หาว่ารายการ \{1, 2} ว่างเปล่าหรือไม่
```powerquery
List.IsEmpty({1, 2})
```

Result: 
```powerquery
false
```




## Category
List.Information
