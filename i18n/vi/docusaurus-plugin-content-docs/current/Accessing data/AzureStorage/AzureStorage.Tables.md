---
title: AzureStorage.Tables
---

# AzureStorage.Tables


Trả về một bảng điều hướng được, có chứa các bảng tìm thấy trong tài khoản được chỉ định từ tín liệu bộ nhớ Azure.


## Syntax

```powerquery
AzureStorage.Tables(
    account as text,
    optional options as record
) as table
```


## Remarks

Trả về bảng dẫn hướng chứa một hàng cho mỗi bảng được tìm thấy tại URL tài khoản, <code>account</code>, từ kho lưu trữ Azure. Mỗi hàng chứa một liên kết tới bảng azure. Tham số bản ghi tùy chọn, <code>options</code>, có thể được cung cấp để chỉ định thuộc tính bổ sung. Bản ghi có thể chứa các trường sau đây:    <ul><li><code>Timeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ y&#234;u cầu với m&#225;y chủ. Gi&#225; trị mặc định tùy thuộc theo nguồn.</li></ul>



## Category
Accessing data
