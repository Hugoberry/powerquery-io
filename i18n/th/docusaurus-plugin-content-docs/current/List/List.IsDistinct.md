---
title: List.IsDistinct
---

# List.IsDistinct


## Description

ระบุว่ามีค่าซ้ำในรายการหรือไม่


## Syntax

```powerquery
List.IsDistinct(
    list as list,
    optional equationCriteria as any
) as logical
```


## Details

ส่งกลับค่าเชิงตรรกะว่ามีค่าซ้ำในรายการหรือไม่ <code>list</code>; <code>true</code> ถ้ารายการไม่ซ้ำ <code>false</code> ถ้ามีค่าซ้ำ 


## Examples

### Example #1 
ค้นหาว่ารายการ \{1, 2, 3} ไม่ซ้ำหรือไม่ (เช่น ไม่มีรายการซ้ำ)
```powerquery
List.IsDistinct({1, 2, 3})
```

Result: 
```powerquery
true
```


### Example #2 
ค้นหาว่ารายการ \{1, 2, 3, 3} ไม่ซ้ำหรือไม่ (เช่น ไม่มีรายการซ้ำ)
```powerquery
List.IsDistinct({1, 2, 3, 3})
```

Result: 
```powerquery
false
```




## Category
List.Selection
