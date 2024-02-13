---
title: List.Accumulate
---

# List.Accumulate


Tích lũy một giá trị tóm tắt từ các mục trong danh sách.


## Syntax

```powerquery
List.Accumulate(
    list as list,
    seed as any,
    accumulator as function
) as any
```


## Remarks

Tích lũy một giá trị tóm tắt từ các mục trong danh sách <code>list</code> bằng cách sử dụng <code>accumulator</code>.    Có thể đặt một tham số dữ liệu nền tùy chọn <code>seed</code>.


## Examples

### Example #1 
Tích lũy giá trị tóm tắt từ các mục trong danh sách \{1, 2, 3, 4, 5} bằng cách sử dụng ((state, current) =&gt; state + current ).
```powerquery
List.Accumulate({1, 2, 3, 4, 5}, 0, (state, current) => state + current)
```

Result: 
```powerquery
15
```




## Category
List.Transformation functions
