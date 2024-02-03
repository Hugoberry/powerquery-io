---
title: List.Durations
---

# List.Durations


## Description

Tạo một danh sách chứa các giá trị khoảng thời gian khi được cho sẵn một giá trị ban đầu, tổng cộng và giá trị khoảng thời gian tăng dần.


## Syntax

```powerquery
List.Durations(
    start as duration,
    count as number,
    step as duration
) as list
```


## Details

Trả về một danh sách giá trị <code>count</code> <code>duration</code>, bắt đầu tại <code>start</code> và tăng theo số gia <code>duration</code> <code>step</code> cho sẵn.


## Examples

### Example #1 
Tạo một danh sách chứa 5 giá trị bắt đầu từ 1 giờ và tăng theo số gia là một giờ.
```powerquery
List.Durations(#duration(0, 1, 0, 0), 5, #duration(0, 1, 0, 0))
```

Result: 
```powerquery
{
    #duration(0, 1, 0, 0),
    #duration(0, 2, 0, 0),
    #duration(0, 3, 0, 0),
    #duration(0, 4, 0, 0),
    #duration(0, 5, 0, 0)
}
```




## Category
List.Generators
