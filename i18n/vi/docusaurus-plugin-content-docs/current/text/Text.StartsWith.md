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

Trả về đúng nếu giá trị văn bản <code>text</code> bắt đầu bằng giá trị văn bản <code>substring</code>.      <ul>        <li><code>text</code>: <i></i> Giá trị <code>text</code> sẽ được tìm kiếm</li>        <li><code>substring</code>: <i></i> Giá trị <code>text</code> là chuỗi con sẽ được tìm kiếm trong  <code>substring</code></li>        <li><code>comparer</code>: <i>[Tùy chọn]</i> Sử dụng <code>Comparer</code> để kiểm soát các phép so sánh. Chẳng hạn, có thể sử dụng <code>Comparer.OrdinalIgnoreCase</code> để thực hiện các tìm kiếm không phân biệt chữ hoa/chữ thường</li>      </ul>      <div>        <code>comparer</code> là một <code>Comparer</code> được dùng để kiểm soát phép so sánh. Có thể sử dụng các trình so sánh để cung cấp các phép so sánh không phân biệt chữ hoa/chữ thường hoặc phép so sánh có nhận thức về văn hóa và ngôn ngữ.      </div>      <div>        Các trình so sánh tích hợp sau đây được cung cấp bằng ngôn ngữ công thức:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Được dùng để thực hiện phép so sánh có thứ tự chính xác</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Được dùng để thực hiện phép so sánh không phân biệt chữ hoa/chữ thường có thứ tự chính xác</li>        <li> <code>Comparer.FromCulture</code>: Được dùng để thực hiện phép so sánh có nhận thức về văn hóa</li>      </ul>


## Examples

### Example #1 
Kiểm tra văn bản &#34;Hello, World&#34; có bắt đầu bằng văn bản &#34;hello&#34; hay không.
```powerquery
Text.StartsWith("Hello, World", "hello")
```

Result: 
```powerquery
false
```


### Example #2 
Kiểm tra văn bản &#34;Hello, World&#34; có bắt đầu bằng văn bản &#34;Hello&#34; hay không.
```powerquery
Text.StartsWith("Hello, World", "Hello")
```

Result: 
```powerquery
true
```




## Category
Text.Membership
