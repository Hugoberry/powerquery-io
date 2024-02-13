---
title: BinaryFormat.Record
---

# BinaryFormat.Record


Trả về một định dạng nhị phân đọc một bản ghi.


## Syntax

```powerquery
BinaryFormat.Record(
    record as record
) as function
```


## Remarks

Trả về một định dạng nhị phân đọc một bản ghi.  Tham số <code>record</code> chỉ định định dạng của bản ghi.  Mỗi trường trong bản ghi có một định dạng nhị phân khác.  Nếu trường chứa một giá trị không phải là giá trị định dạng nhị phân thì không có dữ liệu nào được đọc đối với trường đó và giá trị trường được hồi báo vào kết quả.


## Examples

### Example #1 
Đọc một bản ghi chứa một số nguyên 16 bit và một số nguyên 32 bit.
```powerquery
let
    binaryData = #binary({
        0x00, 0x01,
        0x00, 0x00, 0x00, 0x02
    }),
    recordFormat = BinaryFormat.Record([
        A = BinaryFormat.UnsignedInteger16,
        B = BinaryFormat.UnsignedInteger32
    ])
in
    recordFormat(binaryData)
```

Result: 
```powerquery
[A = 1, B = 2]
```




## Category
Binary Formats.Reading records
