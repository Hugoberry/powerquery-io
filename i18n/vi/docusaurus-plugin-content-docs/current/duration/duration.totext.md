---
title: Duration.ToText
---

# Duration.ToText


Trả về văn bản có dạng "d.h:m:s".


## Syntax

```powerquery
Duration.ToText(
    duration as duration,
    optional format as text
) as text
```


## Remarks

Trả về một dạng thức biểu diễn bằng văn bản có dạng "day.hour:mins:sec" cho giá trị khoảng thời gian cụ thể, `duration`.

-   `duration`: Một `khoảng thời gian` được dùng làm căn cứ để tính dạng thức biểu diễn đó.
-   `format`: *(Tùy chọn)* Không dùng nữa, sẽ xuất hiện lỗi nếu không phải giá trị null.


## Examples

### Example #1
Chuyển đổi `#duration(2, 5, 55, 20)` thành giá trị văn bản.
```powerquery
Duration.ToText(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
"2.05:55:20"
```




## Category
Duration
