---
title: Text.PositionOf
---

# Text.PositionOf


Trả về vị trí đầu tiên của giá trị (-1 nếu không tìm thấy).


## Syntax

```powerquery
Text.PositionOf(
    text as text,
    substring as text,
    optional occurrence as Occurrence.Type,
    optional comparer as function
) as any
```


## Remarks

Trả về vị trí xuất hiện đã chỉ định của giá trị văn bản `substring` có trong `text`. Có thể sử dụng tham số tùy chọn `occurrence` để chỉ định vị trí xuất hiện sẽ trả về (lần xuất hiện đầu tiên theo mặc định). Trả về -1 nếu không tìm thấy `substring`.

`comparer` là `Comparer` dùng để kiểm soát phép so sánh. Có thể dùng các trình so sánh để cung cấp phép so sánh không phân biệt chữ hoa/chữ thường hoặc có nhận biết về văn hóa và ngôn ngữ

Trình so sánh cài sẵn sau đây được cung cấp bằng ngôn ngữ công thức:

-   `Comparer.Ordinal`: Dùng để tiến hành so sánh theo thứ tự chính xác
-   `Comparer.OrdinalIgnoreCase`: Dùng để tiến hành so sánh không phân biệt chữ hoa/chữ thường theo thứ tự chính xác
-   `Comparer.FromCulture`: Dùng để tiến hành so sánh có nhận biết về văn hóa


## Examples

### Example #1
Nhận vị trí của lần xuất hiện đầu tiên của "World" trong văn bản "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2
Tìm vị trí xuất hiện cuối cùng của "World" trong "Hello, World! Hello, World!".
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
