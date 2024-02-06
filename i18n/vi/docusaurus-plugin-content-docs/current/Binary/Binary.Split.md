---
title: Binary.Split
---

# Binary.Split


Tách nhị phân đã chỉ định thành danh sách các nhị phân sử dụng kích thước trang đã chỉ định.


## Syntax

```powerquery
Binary.Split(
    binary as binary,
    pageSize as number
) as list
```


## Remarks

Tách <code>binary</code> thành danh sách các nhị phân, nơi phần tử đầu tiên của danh sách đầu ra là nhị phân chứa byte <code>pageSize</code> đầu tiên từ    nhị phân nguồn, phần tử tiếp theo của danh sách đầu ra là nhị phân chứa byte <code>pageSize</code> tiếp theo từ nhị phân nguồn, v.v.



## Category
Binary
