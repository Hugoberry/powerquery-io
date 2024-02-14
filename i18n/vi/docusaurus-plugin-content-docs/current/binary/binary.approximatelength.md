---
title: Binary.ApproximateLength
---

# Binary.ApproximateLength


Trả về độ dài gần đúng của nhị phân.


## Syntax

```powerquery
Binary.ApproximateLength(
    binary as binary
) as number
```


## Remarks

Trả về độ dài gần đúng của <code>binary</code> hoặc lỗi nếu nguồn dữ liệu không hỗ trợ độ dài gần đúng.


## Examples

### Example #1 
Nhận được độ dài gần đúng của giá trị nhị phân.
```powerquery
Binary.ApproximateLength(Binary.FromText("i45WMlSKjQUA", BinaryEncoding.Base64))
```

Result: 
```powerquery
9
```




## Category
Binary
