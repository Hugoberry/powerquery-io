---
title: BinaryFormat.Transform
---

# BinaryFormat.Transform


Trả về một định dạng nhị phân sẽ chuyển đổi các giá trị được đọc bởi một định dạng nhị phân khác.


## Syntax

```powerquery
BinaryFormat.Transform(
    binaryFormat as function,
    function as function
) as function
```


## Remarks

Trả về một định dạng nhị phân sẽ chuyển đổi các giá trị được đọc bởi một định dạng nhị phân khác.  Tham số <code>binaryFormat</code> chỉ định định dạng nhị phân sẽ được dùng để đọc giá trị.  <code>function</code> được gọi ra bằng giá trị được đọc và trả về giá trị được chuyển đổi.


## Examples

### Example #1 
Đọc một byte và thêm một byte vào đó.
```powerquery
let
    binaryData = #binary({1}),
    transformFormat = BinaryFormat.Transform(
        BinaryFormat.Byte,
        (x) => x + 1
    )
in
    transformFormat(binaryData)
```

Result: 
```powerquery
2
```




## Category
Binary Formats.Transforming what was read
