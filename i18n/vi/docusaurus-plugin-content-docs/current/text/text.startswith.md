---
title: Text.StartsWith
---

# Text.StartsWith


Cho biết văn bản có bắt đầu bằng giá trị được chỉ định hay không.


## Syntax

```powerquery
Text.StartsWith(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Trả về true nếu giá trị văn bản `text` bắt đầu bằng giá trị văn bản `substring`.

-   `text`: Giá trị `text` sẽ được tìm kiếm.
-   `substring`: Giá trị `text` đóng vai trò là chuỗi con sẽ được tìm kiếm trong `text`.
-   `comparer`: *(Tùy chọn)* `Comparer` được dùng để kiểm soát kiểu so sánh. Chẳng hạn, `Comparer.OrdinalIgnoreCase` có thể được dùng để tìm kiếm nội dung không phân biệt chữ viết hoa/thường.

`comparer` là `Comparer` được dùng để kiểm soát kiểu so sánh. Có thể sử dụng trình so sánh để thực hiện các kiểu so sánh không phân biệt chữ viết hoa/thường hoặc có xét đến ngôn ngữ và thiết đặt bản địa.

Các trình so sánh tích hợp sau đây có sẵn trong ngôn ngữ công thức:

-   `Comparer.Ordinal`: Dùng để thực hiện kiểu so sánh theo số thứ tự chính xác.
-   `Comparer.OrdinalIgnoreCase`: Dùng để thực hiện kiểu so sánh không phân biệt chữ viết hoa/thường theo số thứ tự chính xác.
-   `Comparer.FromCulture`: Dùng để thực hiện kiểu so sánh có xét đến ngôn ngữ.


## Examples

### Example #1
Kiểm tra văn bản "Hello, World" có bắt đầu bằng văn bản "hello" hay không.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2
Kiểm tra văn bản "Hello, World" có bắt đầu bằng văn bản "Hello" hay không.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```


### Example #3
Bỏ qua trường hợp, kiểm tra xem văn bản "Hello, World" có bắt đầu bằng văn bản "hello" hay không.
```powerquery
Text.StartsWith("Hello, World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
