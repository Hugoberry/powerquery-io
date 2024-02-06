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

Cho biết văn bản đã chọn, <code>text</code>, có kết thúc bằng giá trị được chỉ định, <code>substring</code> hay không. Thông tin chỉ thị có phân biệt chữ hoa/chữ thường.      <div>        <code>comparer</code> là <code>Trình so sánh</code> dùng để kiểm soát phép so sánh. Có thể dùng các trình so sánh để cung cấp phép so sánh không phân biệt chữ hoa/chữ thường và có nhận thức về văn hóa và ngôn ngư.      </div>      <div>        Các trình so sánh cài sẵn sau đây được cung cấp bằng ngôn ngữ công thức:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Dùng để tiến hành so sánh theo thứ tự chính xác</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Dùng để tiến hành so sánh không phân biệt chữ hoa chữ thường theo thứ tự chính xác</li>        <li> <code>Comparer.FromCulture</code>: Dùng để tiến hành so sánh có nhận thức về văn hóa</li>      </ul>


## Examples

### Example #1 
Kiểm tra &#34;Hello, World&#34; có kết thúc bằng &#34;world&#34; hay không.
```powerquery
Text.EndsWith("Hello, World", "world")
```

Result: 
```powerquery
false
```


### Example #2 
Kiểm tra &#34;Hello, World&#34; có kết thúc bằng &#34;World&#34; hay không.
```powerquery
Text.EndsWith("Hello, World", "World")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
