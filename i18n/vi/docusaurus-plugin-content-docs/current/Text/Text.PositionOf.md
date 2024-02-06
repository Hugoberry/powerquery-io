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

Trả về vị trí xuất hiện đã chỉ định của giá trị văn bản <code>substring</code> có trong <code>text</code>.    Có thể sử dụng tham số tùy chọn <code>occurrence</code> để chỉ định vị trí xuất hiện sẽ trả về (lần xuất hiện đầu tiên theo mặc định).    Trả về -1 nếu không tìm thấy <code>substring</code>.      <div>        <code>comparer</code> là <code>Comparer</code> dùng để kiểm soát phép so sánh. Có thể dùng các trình so sánh để cung cấp phép so sánh không phân biệt chữ hoa/chữ thường hoặc có nhận biết về văn hóa và ngôn ngữ      </div>      <div>        Trình so sánh cài sẵn sau đây được cung cấp bằng ngôn ngữ công thức:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Dùng để tiến hành so sánh theo thứ tự chính xác</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Dùng để tiến hành so sánh không phân biệt chữ hoa/chữ thường theo thứ tự chính xác</li>        <li> <code>Comparer.FromCulture</code>: Dùng để tiến hành so sánh có nhận biết về văn hóa</li>      </ul>


## Examples

### Example #1 
Nhận vị trí của lần xuất hiện đầu tiên của &#34;World&#34; trong văn bản &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World")
```

Result: 
```powerquery
7
```


### Example #2 
Tìm vị trí xuất hiện cuối cùng của &#34;World&#34; trong &#34;Hello, World! Hello, World!&#34;.
```powerquery
Text.PositionOf("Hello, World! Hello, World!", "World", Occurrence.Last)
```

Result: 
```powerquery
21
```




## Category
Text.Membership
