---
title: Text.EndsWith
---

# Text.EndsWith


Cho biết văn bản có kết thúc bằng giá trị được chỉ định hay không.


## Syntax

```powerquery
Text.EndsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Cho biết văn bản đã chọn, `text`, có kết thúc bằng giá trị được chỉ định, `substring` hay không. Thông tin chỉ thị có phân biệt chữ hoa/chữ thường.

`comparer` là `Trình so sánh` dùng để kiểm soát phép so sánh. Có thể dùng các trình so sánh để cung cấp phép so sánh không phân biệt chữ hoa/chữ thường và có nhận thức về văn hóa và ngôn ngư.

Các trình so sánh cài sẵn sau đây được cung cấp bằng ngôn ngữ công thức:

-   `Comparer.Ordinal`: Dùng để tiến hành so sánh theo thứ tự chính xác
-   `Comparer.OrdinalIgnoreCase`: Dùng để tiến hành so sánh không phân biệt chữ hoa chữ thường theo thứ tự chính xác
-   `Comparer.FromCulture`: Dùng để tiến hành so sánh có nhận thức về văn hóa


## Examples

### Example #1
Kiểm tra "Hello, World" có kết thúc bằng "world" hay không.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2
Kiểm tra "Hello, World" có kết thúc bằng "World" hay không.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
