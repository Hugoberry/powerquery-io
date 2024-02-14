---
title: BinaryFormat.List
---

# BinaryFormat.List


Trả về một định dạng nhị phân đọc trình tự các mục và trả về một danh sách.


## Syntax

```powerquery
BinaryFormat.List(
    binaryFormat as function,
    optional countOrCondition as any
) as function
```


## Remarks

Trả về một định dạng nhị phân đọc trình tự mục và trả về một <code>danh sách</code>.  Tham số <code>binaryFormat</code> chỉ định định dạng nhị phân của mỗi mục.  Có ba cách để xác định số lượng mục được đọc: <ul><li>Nếu <code>countOrCondition</code> không được chỉ định thì định dạng nhị phân sẽ đọc cho đến khi không còn mục nào.</li><li>Nếu <code>countOrCondition</code> là một số thì định dạng nhị phân sẽ đọc toàn bộ số lượng mục đó.</li><li>Nếu <code>countOrCondition</code> là một hàm thì hàm đó sẽ được gọi ra cho mỗi mục được đọc.  Hàm trả về true để tiếp tục và false để dừng đọc mục.  Mục cuối cùng được thêm vào danh sách.</li><li>Nếu <code>countOrCondition</code> là định dạng nhị phân thì tổng số mục theo dự kiến sẽ đứng trước danh sách và định dạng đã chỉ định sẽ được dùng để đọc tổng đó.</li></ul>


## Examples

### Example #1 
Đọc byte cho đến cuối dữ liệu.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2, 3}
```


### Example #2 
Đọc hai byte.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```


### Example #3 
Đọc byte cho đến khi giá trị byte lớn hơn hoặc bằng hai.
```powerquery
let
    binaryData = #binary({1, 2, 3}),
    listFormat = BinaryFormat.List(BinaryFormat.Byte, (x) => x < 2)
in
    listFormat(binaryData)
```

Result: 
```powerquery
{1, 2}
```




## Category
Binary Formats.Reading lists
