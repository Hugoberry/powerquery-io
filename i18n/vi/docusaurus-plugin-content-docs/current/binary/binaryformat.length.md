---
title: BinaryFormat.Length
---

# BinaryFormat.Length


Trả về một định dạng nhị phân giới hạn số lượng dữ liệu có thể đọc.


## Syntax

```powerquery
BinaryFormat.Length(
    binaryFormat as function,
    length as any
) as function
```


## Remarks

Trả về một định dạng nhị phân giới hạn số lượng dữ liệu có thể đọc. Có thể sử dụng cả `BinaryFormat.List` và `BinaryFormat.Binary` để đọc cho đến khi hết dữ liệu. Có thể sử dụng `BinaryFormat.Length` để giới hạn số byte được đọc. Tham số `binaryFormat` chỉ định định dạng nhị phân để giới hạn. Tham số `length` chỉ định số byte để đọc. Tham số `length` có thể là một giá trị số hoặc một giá trị định dạng nhị phân chỉ định định dạng của giá trị độ dài xuất hiện và đứng trước giá trị được đọc.


## Examples

### Example #1
Giới hạn số lượng byte được đọc là 2 khi đọc một danh sách byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        2
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #2
Giới hạn số lượng byte được đọc khi đọc một danh sách byte ở giá trị byte đứng trước danh sách.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.Length(
        BinaryFormat.List(BinaryFormat.Byte),
        BinaryFormat.Byte
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{2}
```




## Category
Binary Formats.Limiting input
