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

Trả về một giá trị `logical` dựa trên kiểm tra đẳng thức đối với hai giá trị cho sẵn, `x` và `y`, sử dụng `comparer` đã cho.

`comparer` là `Comparer`, dùng để kiểm soát việc so sánh. Hàm so sánh chấp nhận hai đối số và trả về -1, 0 hoặc 1 dựa trên việc giá trị đầu tiên nhỏ hơn, bằng hay lớn hơn giá trị thứ hai. Có thể dùng hàm so sánh để thực hiện các phép so sánh không phân biệt chữ hoa chữ thường hoặc có nhận thức về văn hóa và ngôn ngữ.

Các hàm so sánh tích hợp sau đây có sẵn bằng ngôn ngữ công thức:

-   `Comparer.Ordinal`: Dùng để so sánh thứ tự chính xác
-   `Comparer.OrdinalIgnoreCase`: Dùng để thực hiện phép so sánh thứ tự chính xác không phân biệt chữ hoa chữ thường
-   `Comparer.FromCulture`: Dùng để thực hiện phép so sánh có nhận thức về văn hóa


## Examples

### Example #1
So sánh "1" và "A" bằng ngôn ngữ "vi-VN" để xác định xem các giá trị đó có bằng nhau hay không.
```powerquery
Comparer.Equals(Comparer.FromCulture("en-US"), "1", "A")
```

Result: 
```powerquery
false
```




## Category
Comparer
