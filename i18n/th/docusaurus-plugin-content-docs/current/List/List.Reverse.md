---
title: List.Reverse
---

# List.Reverse


## Description

ย้อนกลับลำดับของค่าในรายการ


## Syntax

```powerquery
List.Reverse(
    list as list
) as list
```


## Details

ส่งกลับรายการซึ่งมีค่าในรายการ <code>list</code> ในลำดับย้อนกลับ


## Examples

### Example #1 
สร้างรายการจาก \{1..10} ในลำดับย้อนกลับ
```powerquery
List.Reverse({1..10})
```

Result: 
```powerquery
{10, 9, 8, 7, 6, 5, 4, 3, 2, 1}
```




## Category
List.Transformation functions
