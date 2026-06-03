---
title: AzureStorage.Blobs
---

# AzureStorage.Blobs


Trả về một bảng có thể điều hướng chứa các bộ chứa tìm được trong tài khoản được chỉ định từ tín liệu bộ nhớ Azure.


## Syntax

```powerquery
AzureStorage.Blobs(
    account as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng có thể điều hướng chứa một hàng cho mỗi bộ chứa tìm được tại URL tài khoản `account` từ tín liệu bộ nhớ Azure. Mỗi hàng chứa một liên kết tới các blob bộ chứa. `options` có thể được chỉ định để kiểm soát các tùy chọn sau:

-   `BlockSize` : Số byte cần đọc trước khi chờ mức sử dụng dữ liệu. Giá trị mặc định là 4 MB.
-   `RequestSize` : Số byte cần cố gắng đọc trong một yêu cầu HTTP đến máy chủ. Giá trị mặc định là 4 MB.
-   `ConcurrentRequests` : Tùy chọn ConcurrentRequests hỗ trợ tải xuống dữ liệu nhanh hơn bằng cách chỉ định số lượng yêu cầu cần thực hiện song song, với chi phí sử dụng bộ nhớ. Bộ nhớ được yêu cầu là (ConcurrentRequest \* RequestSize). Giá trị mặc định là 16.



## Category
Accessing data
