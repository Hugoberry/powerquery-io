---
title: BinaryFormat.Choice
---

# BinaryFormat.Choice


Trả về một định dạng nhị phân chọn định dạng nhị phân tiếp theo dựa trên một giá trị đã được đọc.


## Syntax

```powerquery
BinaryFormat.Choice(
    binaryFormat as function,
    chooseFunction as function,
    optional type as type,
    optional combineFunction as function
) as function
```


## Remarks

Trả về một định dạng nhị phân chọn định dạng nhị phân tiếp theo dựa trên một giá trị đã được đọc. Giá trị định dạng nhị phân do hàm này tạo hoạt động ở các giai đoạn:

-   Định dạng nhị phân do tham số `binaryFormat` chỉ định được dùng để đọc giá trị.
-   Giá trị được chuyển tới hàm lựa chọn do tham số `chooseFunction` chỉ định.
-   Hàm lựa chọn kiểm tra giá trị và trả về định dạng nhị phân thứ hai.
-   Định dạng nhị phân thứ hai đường dùng để đọc giá trị thứ hai.
-   Nếu hàm kết hợp được chỉ định thì giá trị đầu tiên và giá trị thứ hai được chuyển tới hàm kết hợp và giá trị kết quả được trả về.
-   Nếu hàm kết hợp không được chỉ định thì giá trị thứ hai được trả về.
-   Giá trị thứ hai được trả về.

Tham số `type` tùy chọn cho biết loại định dạng nhị phân mà hàm lựa chọn sẽ trả về. `type any`, `type list` hoặc `type binary` có thể được chỉ định. Nếu tham số `type` không được chỉ định thì `type any` được sử dụng. Nếu `type list` hoặc `type binary` được sử dụng thì hệ thống có thể trả về giá trị `binary` hoặc `list` được truyền thay vì giá trị được tải, loại giá trị này có thể làm giảm số lượng bộ nhớ cần dùng để đọc định dạng.


## Examples

### Example #1
Đọc danh sách byte nơi byte đầu tiên quyết định số lượng phần tử.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length)
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```


### Example #2
Đọc danh sách byte nơi byte đầu tiên quyết định số lượng phần tử và bảo toàn byte đầu tiên được đọc.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.Record([
            length = length,
            list = BinaryFormat.List(BinaryFormat.Byte, length)
        ])
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
[length = 2, list = {3, 4}]
```


### Example #3
Đọc danh sách byte nơi byte đầu tiên quyết định số lượng phần tử bằng cách sử dụng danh sách truyền.
```powerquery
let
    binaryData = #binary({2, 3, 4, 5}),
    listFormat = BinaryFormat.Choice(
        BinaryFormat.Byte,
        (length) => BinaryFormat.List(BinaryFormat.Byte, length),
        type list
    )
in
    listFormat(binaryData)
```

Result: 
```powerquery
{3, 4}
```




## Category
Binary Formats.Controlling what comes next
