---
title: List.Numbers
---

# List.Numbers


## Description

Trả về một danh sách số khi được cho sẵn giá trị ban đầu, tổng cộng và giá trị tăng tùy chọn.


## Syntax

```powerquery
List.Numbers(
    start as number,
    count as number,
    optional increment as number
) as list
```


## Details

Trả về một danh sách số khi được cho sẵn giá trị ban đầu, tổng cộng và giá trị tăng tùy chọn. Giá trị tăng mặc định là 1.<ul>   <li><code>start</code>: Giá trị ban đầu trong danh sách.</li>   <li><code>count</code>: Số lượng giá trị sẽ tạo.</li>   <li><code>increment</code>: <i>[Tùy chọn]</i> Giá trị để tăng theo. Nếu các giá trị bị bỏ qua được tăng theo số gia 1.</li></ul>


## Examples

### Example #1 
Tạo một danh sách chứa 10 số liên tục bắt đầu tại 1.
```powerquery
List.Numbers(1, 10)
```

Result: 
```powerquery
{
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
}
```


### Example #2 
Tạo một danh sách chứa 10 số bắt đầu tại 1 với số gia là 2 cho mỗi số tiếp theo.
```powerquery
List.Numbers(1, 10, 2)
```

Result: 
```powerquery
{
    1,
    3,
    5,
    7,
    9,
    11,
    13,
    15,
    17,
    19
}
```




## Category
List.Generators
