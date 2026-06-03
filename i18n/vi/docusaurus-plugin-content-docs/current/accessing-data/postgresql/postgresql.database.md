---
title: PostgreSQL.Database
---

# PostgreSQL.Database


Trả về bảng chứa các bảng SQL và các chế độ xem có trong cơ sở dữ liệu PostgreSQL.


## Syntax

```powerquery
PostgreSQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa dạng xem và bảng SQL có trong cơ sở dữ liệu PostgreSQL trên máy chủ `server` trong phiên bản cơ sở dữ liệu có tên là `database`. Có thể tùy ý chỉ định cổng với máy chủ, được phân tách bằng dấu hai chấm. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau đây:

-   `CreateNavigationProperties` : Một phép (true/false) logic đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là true).
-   `NavigationPropertyNameGenerator` : Hàm được sử dụng để tạo tên cho các thuộc tính điều hướng.
-   `Query` : Đã sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu tiên được trả về.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `HierarchicalNavigation` : Một phép (true/false) logic đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là false).

Ví dụ: tham số bản ghi được chỉ định dưới dạng \[option1 = value1, option2 = value2...\] hoặc \[Query = "select ..."\].



## Category
Accessing data
