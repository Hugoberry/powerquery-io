---
title: HdInsight.Containers
---

# HdInsight.Containers


Trả về bảng điều hướng chứa vùng chứa có trong tài khoản chỉ định từ ngăn lưu trữ Azure.


## Syntax

```powerquery
HdInsight.Containers(
    account as text
) as table
```


## Remarks

Trả về bảng điều hướng chứa một hàng cho mỗi vùng chứa có trong URL của tài khoản, <code>account</code>, từ ngăn lưu trữ Azure. Mỗi hàng chứa một liên kết đến các blob của vùng chứa.



## Category
Accessing data
