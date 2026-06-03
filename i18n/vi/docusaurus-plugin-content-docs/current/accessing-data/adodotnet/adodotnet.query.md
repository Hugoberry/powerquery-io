---
title: AdoDotNet.Query
---

# AdoDotNet.Query


Trả lại kết quả về chạy truy vấn gốc trên nguồn dữ liệu ADO.NET.


## Syntax

```powerquery
AdoDotNet.Query(
    providerName as text,
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Remarks

Trả về kết quả chạy `query` bằng chuỗi kết nối `connectionString` sử dụng nhà cung cấp ADO.NET `providerName`. `connectionString` có thể là văn bản hoặc bản ghi gồm các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `SqlCompatibleWindowsAuth` : Một logic (đúng / sai) quyết định xem có tạo các tùy chọn chuỗi kết nối tương thích với SQL Server để xác thực Windows hay không. Giá trị mặc định là true.



## Category
Accessing data
