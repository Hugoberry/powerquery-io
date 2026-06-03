---
title: List.Covariance
---

# List.Covariance


Trả về hiệp phương sai giữa hai danh sách số.


## Syntax

```powerquery
List.Covariance(
    numberList1 as list,
    numberList2 as list
) as number
```


## Remarks

Trả về hiệp phương sai giữa hai danh sách, `numberList1` và `numberList2`. `numberList1` và `numberList2` phải chứa cùng số lượng là `number` giá trị.


## Examples

### Example #1
Tính hiệp phương sai giữa hai danh sách.
```powerquery
List.Covariance({1, 2, 3}, {1, 2, 3})
```

Result: 
```powerquery
0.66666666666666607
```




## Category
List.Numerics
