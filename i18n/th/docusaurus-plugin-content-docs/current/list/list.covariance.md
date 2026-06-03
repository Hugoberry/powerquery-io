---
title: List.Covariance
---

# List.Covariance


ส่งกลับค่าความแปรปรวนระหว่างรายการตัวเลขทั้งสองรายการ


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

ส่งกลับค่าความแปรปรวนระหว่างสองรายการ `numberList1` และ `numberList2` `numberList1` และ `numberList2` ต้องมีจำนวนค่า `number` เดียวกัน


## Examples

### Example #1
คำนวณค่าความแปรปรวนระหว่างสองรายการ
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
