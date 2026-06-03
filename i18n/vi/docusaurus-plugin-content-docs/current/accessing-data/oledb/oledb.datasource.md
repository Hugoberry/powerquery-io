---
title: OleDb.DataSource
---

# OleDb.DataSource


Trả về bảng gồm dạng xem và bảng SQL từ nguồn dữ liệu OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Trả về một bảng gồm các dạng xem và bảng SQL từ nguồn dữ liệu OLE DB do chuỗi kết nối `connectionString` chỉ định. `connectionString` có thể là văn bản hoặc bản ghi của cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `CreateNavigationProperties` : Một phép (true/false) logic đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là true).
-   `NavigationPropertyNameGenerator` : Hàm được sử dụng để tạo tên cho các thuộc tính điều hướng.
-   `Query` : Đã sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu tiên được trả về.
-   `HierarchicalNavigation` : Một phép lô-gic (true/false) đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là true).
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `SqlCompatibleWindowsAuth` : Một logic (đúng / sai) quyết định xem có tạo các tùy chọn chuỗi kết nối tương thích với SQL Server để xác thực Windows hay không. Giá trị mặc định là true.

Ví dụ: tham số bản ghi được chỉ định dưới dạng \[option1 = value1, option2 = value2...\] hoặc \[Query = "select ..."\].



## Category
Accessing data
