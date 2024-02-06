---
title: Text.Contains
---

# Text.Contains


Trả về kết quả văn bản có chứa chuỗi con hay không.


## Syntax

```powerquery
Text.Contains(
    text as text,
    substring as text,
    optional comparer as function
) as logical
```


## Remarks

Phát hiện xem <code>text</code> có chứa giá trị <code>substring</code> không. Trả về true nếu tìm thấy giá trị đó. Hàm này không hỗ trợ các ký tự đại diện hoặc biểu thức thông thường.      <br />      <br />      Đối số tùy chọn <code>comparer</code> có thể dùng để chỉ định các phép so sánh không phân biệt chữ hoa/thường hoặc phép so sánh có tính đến yếu tố văn hóa và ngôn ngữ.      Các trình so sánh cài sẵn sau đây được cung cấp bằng ngôn ngữ công thức:      <ul>        <li><code>Comparer.Ordinal</code>: Dùng để thực hiện phép so sánh thứ tự có phân biệt chữ hoa/thường</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Dùng để thực hiện phép so sánh thứ tự không phân biệt chữ hoa/thường</li>        <li> <code>Comparer.FromCulture</code>: Dùng để thực hiện phép so sánh có tính đến yếu tố văn hóa</li>      </ul>


## Examples

### Example #1 
Tìm xem văn bản &#34;Hello World&#34; có chứa &#34;Hello&#34; hay không.
```powerquery
Text.Contains("Hello World", "Hello")
```

Result: 
```powerquery
true
```


### Example #2 
Tìm xem văn bản &#34;Hello World&#34; có chứa &#34;hello&#34; hay không.
```powerquery
Text.Contains("Hello World", "hello")
```

Result: 
```powerquery
false
```


### Example #3 
Tìm xem văn bản &#34;Hello World&#34; có chứa &#34;hello&#34; không bằng trình so sánh không phân biệt chữ hoa/thường.
```powerquery
Text.Contains("Hello World", "hello", Comparer.OrdinalIgnoreCase)
```

Result: 
```powerquery
true
```




## Category
Text.Membership
