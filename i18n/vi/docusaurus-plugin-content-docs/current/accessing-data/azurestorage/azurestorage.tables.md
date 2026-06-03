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

Trả về bảng dẫn hướng chứa một hàng cho mỗi bảng được tìm thấy tại URL tài khoản, `account`, từ kho lưu trữ Azure. Mỗi hàng chứa một liên kết tới bảng Azure. Có thể cung cấp tham số bản ghi tùy chọn `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `Timeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ yêu cầu với máy chủ. Giá trị mặc định tùy thuộc theo nguồn.



## Category
Accessing data
