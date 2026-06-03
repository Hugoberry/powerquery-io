---
title: MySQL.Database
---

# MySQL.Database


Trả về một bảng chứa các bảng SQL, lượt xem và các hàm vô hướng được lưu trữ có trong cơ sở dữ liệu MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa dạng xem, bảng SQL và các hàm vô hướng đã lưu trữ có trong cơ sở dữ liệu MySQL trên máy chủ `server` trong phiên bản cơ sở dữ liệu có tên `database`. Có thể tùy ý chỉ định cổng với máy chủ, được phân tách bằng dấu hai chấm. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau đây:

-   `Encoding` : Đã gửi giá trị TextEncoding chỉ định bộ ký tự được sử dụng để mã hóa tất cả các truy vấn đến máy chủ (giá trị mặc định là null).
-   `CreateNavigationProperties` : Một phép (true/false) logic đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là true).
-   `NavigationPropertyNameGenerator` : Hàm được sử dụng để tạo tên cho các thuộc tính điều hướng.
-   `Query` : Đã sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu tiên được trả về.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `TreatTinyAsBoolean` : Một phép (true/false) logic xác định xem có buộc cột tinyint trên máy chủ dưới dạng giá trị logic hay không. Giá trị mặc định là true.
-   `OldGuids` : Một phép (true/false) logic đặt xem sẽ coi cột char(36) (nếu là false) hay cột binary(16) (nếu là true) là GUID. Giá trị mặc định là false.
-   `ReturnSingleDatabase` : Một phép (true/false) logic đặt xem trả về tất cả các bảng chứa tất cả cơ sở dữ liệu (nếu là false) hay trả về bảng và dạng xem chứa cơ sở dữ liệu được chỉ định (nếu là true). Giá trị mặc định là false.
-   `HierarchicalNavigation` : Một phép (true/false) logic đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là false).

Ví dụ: tham số bản ghi được chỉ định dưới dạng \[option1 = value1, option2 = value2...\] hoặc \[Query = "select ..."\].



## Category
Accessing data
