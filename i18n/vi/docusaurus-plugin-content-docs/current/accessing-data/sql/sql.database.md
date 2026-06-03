---
title: Sql.Database
---

# Sql.Database


Trả về một bảng chứa các bảng SQL, lượt xem và các hàm được lưu trữ từ cơ sở dữ liệu SQL.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa dạng xem, bảng SQL và các hàm đã lưu trữ từ cơ sở dữ liệu SQL Server `database` trên máy chủ `server`. Có thể tùy ý chỉ định cổng với máy chủ, phân tách bằng dấu hai chấm hoặc dấu phẩy. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau đây:

-   `Query` : Đã sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu tiên được trả về.
-   `CreateNavigationProperties` : Một phép (true/false) logic đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là true).
-   `NavigationPropertyNameGenerator` : Hàm được sử dụng để tạo tên cho các thuộc tính điều hướng.
-   `MaxDegreeOfParallelism` : Số đặt giá trị của mệnh đề truy vấn "maxdop" trong truy vấn SQL đã tạo.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `HierarchicalNavigation` : Một phép (true/false) logic đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là false).
-   `MultiSubnetFailover` : Một phép (true/false) logic đặt giá trị của thuộc tính "MultiSubnetFailover" trong chuỗi kết nối (mặc định là false).
-   `UnsafeTypeConversions` : Giá trị lô-gic (true/false) trong đó nếu true, thao tác nén các chuyển đổi loại có thể không thành công và khiến toàn bộ truy vấn không thành công. Không nên dùng cho mục đích sử dụng chung.
-   `ContextInfo` : Giá trị nhị phân được sử dụng để đặt CONTEXT\_INFO trước khi chạy từng lệnh.
-   `OmitSRID` : Giá trị lô-gic (true/false) trong đó nếu true thì sẽ bỏ SRID khi tạo Văn bản quen thuộc từ các loại hình học và địa lý.
-   `EnableCrossDatabaseFolding` : Một giá trị lôgic (true/false) mà, nếu là true, cho phép nén truy vấn cơ sở dữ liệu chéo trên cùng một máy chủ. Giá trị mặc định là false.

Ví dụ: tham số bản ghi được chỉ định dưới dạng \[option1 = value1, option2 = value2...\] hoặc \[Query = "select ..."\].



## Category
Accessing data
