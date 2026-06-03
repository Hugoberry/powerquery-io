---
title: Comparer.OrdinalIgnoreCase
---

# Comparer.OrdinalIgnoreCase


Trả về một hàm trình so sánh không phân biệt chữ hoa chữ thường sử dụng quy tắc Thứ tự để so sánh giá trị.


## Syntax

```powerquery
Comparer.OrdinalIgnoreCase(
    x as any,
    y as any
) as number
```


## Remarks

Trả về hàm so sánh không phân biệt chữ hoa chữ thường sử dụng quy tắc Thứ tự để so sánh các giá trị đã cho `x` và `y`.  
  
Hàm so sánh chấp nhận hai đối số và trả về -1, 0 hoặc 1 dựa vào việc liệu giá trị đầu tiên nhỏ hơn, bằng hay lớn hơn giá trị thứ hai.


## Examples

### Example #1
Sử dụng quy tắc Thứ tự không phân biệt chữ hoa chữ thường, so sánh "Abc" với "abc". Lưu ý "Abc" nhỏ hơn "abc" sử dụng `Comparer.Ordinal`.
```powerquery
Comparer.OrdinalIgnoreCase("Abc", "abc")
```

Result: 
```powerquery
0
```




## Category
Comparer
