---
title: Comparer.Ordinal
---

# Comparer.Ordinal


Trả về hàm so sánh sử dụng các quy tắc Thứ tự để so sánh các giá trị.


## Syntax

```powerquery
Comparer.Ordinal(
    x as any,
    y as any
) as number
```


## Remarks

Trả về hàm so sánh sử dụng quy tắc Thứ tự để so sánh các giá trị đã cho `x` và `y`.  
  
Hàm so sánh chấp nhận hai đối số và trả về -1, 0 hoặc 1 dựa vào việc liệu giá trị đầu tiên nhỏ hơn, bằng hay lớn hơn giá trị thứ hai.


## Examples

### Example #1
Sử dụng quy tắc Thứ tự, so sánh xem "encyclopædia" và "encyclopaedia" có tương đồng hay không. Lưu ý: các giá trị này tương đồng khi sử dụng `Comparer.FromCulture("en-US")`.
```powerquery
Comparer.Equals(Comparer.Ordinal, "encyclopædia", "encyclopaedia")
```

Result: 
```powerquery
false
```




## Category
Comparer
