---
title: HdInsight.Files
---

# HdInsight.Files


Trả về một bảng chứa thuộc tính và nội dung của các blob có trong vùng chứa chỉ định từ ngăn lưu trữ Azure.


## Syntax

```powerquery
HdInsight.Files(
    account as text,
    containerName as text
) as table
```


## Remarks

Trả về một bảng chứa một hàng cho mỗi tệp blob có trong URL của vùng chứa, <code>account</code>, từ ngăn lưu trữ Azure. Mỗi hàng chứa thuộc tính của tệp và liên kết đến nội dung của tệp đó.



## Category
Accessing data
