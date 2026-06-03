---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


Trả về bộ sưu tập sơ đồ cho nguồn dữ liệu ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Trả về bộ sưu tập sơ đồ cho nguồn dữ liệu ADO.NET với tên nhà cung cấp là `providerName` và chuỗi kết nối là `connectionString`. `connectionString` có thể là văn bản hoặc bản ghi bao gồm các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `SqlCompatibleWindowsAuth` : Một logic (đúng / sai) quyết định xem có tạo các tùy chọn chuỗi kết nối tương thích với SQL Server để xác thực Windows hay không. Giá trị mặc định là true.
-   `TypeMap`



## Category
Accessing data
