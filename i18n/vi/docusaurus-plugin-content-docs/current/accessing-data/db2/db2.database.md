---
title: DB2.Database
---

# DB2.Database


Trả về một bảng chứa các dạng xem và bảng SQL có trong cơ sở dữ liệu Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa các dạng xem và bảng SQL có trong cơ sở dữ liệu Db2 trên máy chủ `server` trong phiên bản cơ sở dữ liệu có tên là `database`. Có thể tùy ý chỉ định cổng với máy chủ, được phân tách bằng dấu hai chấm. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau đây:

-   `CreateNavigationProperties` : Một phép (true/false) logic đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là true).
-   `NavigationPropertyNameGenerator` : Hàm được sử dụng để tạo tên cho các thuộc tính điều hướng.
-   `Query` : Đã sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu tiên được trả về.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `HierarchicalNavigation` : Một phép (true/false) logic đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là false).
-   `Implementation` : Chỉ định triển khai nhà cung cấp cơ sở dữ liệu nội bộ cần sử dụng. Giá trị hợp lệ là: "IBM" và "Microsoft".
-   `BinaryCodePage` : Số CCSID (Mã định danh bộ ký tự mã hóa) để giải mã dữ liệu nhị phân Db2 FOR BIT thành các chuỗi ký tự. Áp dụng cho Implementation = “Microsoft”. Đặt 0 để tắt tính năng chuyển đổi (mặc định). Đặt 1 để chuyển đổi dựa trên mã hóa cơ sở dữ liệu. Đặt số CCSID khác để chuyển đổi thành mã hóa ứng dụng.
-   `PackageCollection` : Chỉ định giá trị chuỗi cho bộ sưu tập gói (mặc định là "NULLID") để cho phép sử dụng gói được chia sẻ cần thiết nhằm xử lý câu lệnh SQL. Áp dụng cho Implementation = "Microsoft".
-   `UseDb2ConnectGateway` : Chỉ định xem có thực hiện kết nối qua cổng kết nối Db2 Connect không. Áp dụng cho Triển khai = "Microsoft".

Ví dụ: tham số bản ghi được chỉ định dưới dạng \[option1 = value1, option2 = value2...\] hoặc \[Query = "select ..."\].



## Category
Accessing data
