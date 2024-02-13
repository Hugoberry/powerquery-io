---
title: Comparer.Equals
---

# Comparer.Equals


Trả về giá trị logic dựa trên kiểm tra đẳng thức đối với hai giá trị cho sẵn.


## Syntax

```powerquery
Comparer.Equals(
    comparer as function,
    x as any,
    y as any
) as logical
```


## Remarks

Trả về một giá trị <code>logical</code> dựa trên kiểm tra đẳng thức đối với hai giá trị cho sẵn, <code>x</code> và <code>y</code>, sử dụng <code>comparer</code> đã cho.      <div>        <code>comparer</code> là <code>Comparer</code>, dùng để kiểm soát việc so sánh.        Hàm so sánh chấp nhận hai đối số và trả về -1, 0 hoặc 1 dựa trên việc giá trị đầu tiên nhỏ hơn, bằng hay lớn hơn giá trị thứ hai.        Có thể dùng hàm so sánh để thực hiện các phép so sánh không phân biệt chữ hoa chữ thường hoặc có nhận thức về văn hóa và ngôn ngữ.      </div>      <div>        Các hàm so sánh tích hợp sau đây có sẵn bằng ngôn ngữ công thức:      </div>      <ul>        <li><code>Comparer.Ordinal</code>: Dùng để so sánh thứ tự chính xác</li>        <li><code>Comparer.OrdinalIgnoreCase</code>: Dùng để thực hiện phép so sánh thứ tự chính xác không phân biệt chữ hoa chữ thường</li>        <li> <code>Comparer.FromCulture</code>: Dùng để thực hiện phép so sánh có nhận thức về văn hóa</li>      </ul>


## Examples

### Example #1 
So sánh &#34;1&#34; và &#34;A&#34; bằng ngôn ngữ &#34;vi-VN&#34; để xác định xem các giá trị đó có bằng nhau hay không.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
