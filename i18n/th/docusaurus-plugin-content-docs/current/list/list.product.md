---
title: List.Product
---

# List.Product


ส่งกลับผลิตภัณฑ์ของตัวเลขในรายการ


## Syntax

```powerquery
List.Product(
    numbersList as list,
    optional precision as Precision.Type
) as number
```


## Remarks

ส่งกลับผลิตภัณฑ์ของตัวเลขที่ไม่ใช่ค่า Null ในรายการ `numbersList` ส่งกลับ nulll ถ้าไม่มีค่าที่ไม่ใช่ null ในรายการ


## Examples

### Example #1
หาผลิตภัณฑ์ของจำนวนในรายการ `{1, 2, 3, 3, 4, 5, 5}`
```powerquery
List.Product({1, 2, 3, 3, 4, 5, 5})
```

Result: 
```powerquery
1800
```




## Category
List.Numerics
