---
title: List.Split
---

# List.Split


Tách danh sách đã chỉ định thành một danh sách gồm các danh sách sử dụng kích thước trang đã chỉ định.


## Syntax

```powerquery
List.Split(
    list as list,
    pageSize as number
) as list
```


## Remarks

Tách `list` thành danh sách của các danh sách, nơi phần tử đầu tiên của danh sách đầu ra là một danh sách chứa phần tử `pageSize` đầu tiên từ danh sách nguồn, phần tử tiếp theo của danh sách đầu ra là một danh sách chứa phần tử `pageSize` tiếp theo từ danh sách nguồn, v.v.



## Category
List.Transformation functions
