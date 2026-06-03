---
title: Odbc.DataSource
---

# Odbc.DataSource


Trả về một bảng trong các bảng SQL và lượt xem từ nguồn dữ liệu ODBC.


## Syntax

```powerquery
Odbc.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Trả về bảng gồm các dạng xem và bảng SQL từ nguồn dữ liệu ODBC do chuỗi kết nối `connectionString` chỉ định. `connectionString` có thể là văn bản hoặc bản ghi gồm các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `CreateNavigationProperties` : Một phép (true/false) logic đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là true).
-   `HierarchicalNavigation` : Một phép (true/false) logic đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là false).
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định là 15 giây.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `SqlCompatibleWindowsAuth` : Một logic (đúng / sai) quyết định xem có tạo các tùy chọn chuỗi kết nối tương thích với SQL Server để xác thực Windows hay không. Giá trị mặc định là true.


## Examples

### Example #1
Trả về các dạng xem và bảng SQL dựa trên chuỗi kết nối được cung cấp.
```powerquery
Odbc.DataSource("dsn=your_dsn")
```

Result: 
```powerquery
table
```




## Category
Accessing data
