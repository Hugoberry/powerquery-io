---
title: List.Sum
---

# List.Sum


ส่งกลับผลรวมของข้อมูลในรายการ


## Syntax

```powerquery
List.Sum(
    list as list,
    optional precision as Precision.Type
) as any
```


## Remarks

ส่งกลับผลรวมของค่าที่ไม่ใช่ null ในรายการ <code>list</code>  ส่งกลับ nulll ถ้าไม่มีค่าที่ไม่ใช่ null ในรายการ


## Examples

### Example #1 
หาผลรวมของจำนวนในรายการ &lt;code&gt;\{1, 2, 3}&lt;/code&gt;
```powerquery
List.Sum({1, 2, 3})
```

Result: 
```powerquery
6
```




## Category
List.Addition
