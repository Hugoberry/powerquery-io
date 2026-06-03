---
title: AzureStorage.DataLake
---

# AzureStorage.DataLake


Trả về bảng điều hướng chứa các tài liệu tìm thấy trong vùng chứa được chỉ định và những thư mục con của vùng chứa đó trên Azure Data Lake Storage.


## Syntax

```powerquery
AzureStorage.DataLake(
    endpoint as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng có thể điều hướng chứa các tài liệu tìm được tại bộ chứa được chỉ định và các thư mục con của bộ chứa tại URL tài khoản, `endpoint`, từ hệ thống tệp Azure Data Lake Storage. `options` có thể được chỉ định để kiểm soát các tùy chọn sau:

-   `BlockSize` : Số byte cần đọc trước khi chờ mức sử dụng dữ liệu. Giá trị mặc định là 4 MB.
-   `RequestSize` : Số byte cần cố gắng đọc trong một yêu cầu HTTP đến máy chủ. Giá trị mặc định là 4 MB.
-   `ConcurrentRequests` : Tùy chọn ConcurrentRequests hỗ trợ tải xuống dữ liệu nhanh hơn bằng cách chỉ định số lượng yêu cầu cần thực hiện song song, với chi phí sử dụng bộ nhớ. Bộ nhớ được yêu cầu là (ConcurrentRequest \* RequestSize). Giá trị mặc định là 16.
-   `HierarchicalNavigation` : Lô-gic (true/false) kiểm soát liệu các tệp được trả về ở dạng xem thư mục cây hay danh sách phẳng. Giá trị mặc định là false.



## Category
Accessing data
