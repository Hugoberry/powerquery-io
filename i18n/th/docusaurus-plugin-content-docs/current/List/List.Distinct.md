---
title: List.Distinct
---

# List.Distinct


ส่งกลับรายการค่าที่ลบค่าที่ซ้ำออก


## Syntax

```powerquery
List.Distinct(
    list as list,
    optional equationCriteria as any
) as list
```


## Remarks

ส่งกลับรายการซึ่งมีค่าทั้งหมดในรายการ <code>list</code> พร้อมลบค่าที่ซ้ำออก ถ้ารายการว่างเปล่า ผลลัพธ์จะเป็นรายการว่างเปล่า


## Examples

### Example #1 
เอาค่าที่ซ้ำออกจากรายการ \{1, 1, 2, 3, 3, 3}
```powerquery
List.Distinct({1, 1, 2, 3, 3, 3})
```

Result: 
```powerquery
{1, 2, 3}
```




## Category
List.Selection
