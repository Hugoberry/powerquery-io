---
title: SapHana.Database
---

# SapHana.Database


Trả về gói trong cơ sở dữ liệu SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng gồm các gói đa chiều từ cơ sở dữ liệu SAP HANA `server`. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau:

-   `Query` : Đã sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu tiên được trả về.
-   `Distribution` : SapHanaDistribution sẽ đặt giá trị của thuộc tính "Phân phối" trong chuỗi kết nối. Định tuyến câu lệnh là phương pháp đánh giá nút máy chủ chính xác của hệ thống được phân phối trước khi thực thi câu lệnh. Giá trị mặc định là SapHanaDistribution.All.
-   `Implementation` : Chỉ định triển khai trình nối SAP HANA để sử dụng.
-   `EnableColumnBinding` : Liên kết các biến với các cột của tập kết quả SAP HANA khi tải dữ liệu. Có thể cải thiện hiệu suất với chi phí sử dụng bộ nhớ cao hơn một chút. Giá trị mặc định là false.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định là 15 giây.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định là 10 phút.



## Category
Accessing data
