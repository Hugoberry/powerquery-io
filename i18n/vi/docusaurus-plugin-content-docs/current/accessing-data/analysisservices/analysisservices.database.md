---
title: AnalysisServices.Database
---

# AnalysisServices.Database


Trả lại một bảng có cue đa chiều từ cơ sở dữ liệu Analysis Services.


## Syntax

```powerquery
AnalysisServices.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng gồm các khối đa chiều hoặc mô hình dạng bảng từ cơ sở dữ liệu Analysis Services `database` trên máy chủ `server`. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau:

-   `Query` : Đã sử dụng truy vấn MDX gốc để truy xuất dữ liệu.
-   `TypedMeasureColumns` : Giá trị lô-gic cho biết liệu các loại được chỉ định trong mô hình dạng bảng hoặc đa chiều có được sử dụng cho các loại cột giá trị đo đã thêm hay không. Khi đặt thành false, loại "số" sẽ được sử dụng cho tất cả các cột giá trị đo. Giá trị mặc định cho tùy chọn này là false.
-   `Culture` : Tên ngôn ngữ chỉ định ngôn ngữ cho dữ liệu. Thuộc tính này tương ứng với thuộc tính chuỗi kết nối 'Mã định danh cục bộ'.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng truy vấn phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `SubQueries` : Số (0, 1 hoặc 2) đặt giá trị của thuộc tính "SubQueries" trong chuỗi kết nối. Giá trị này kiểm soát hành động của các thành phần được tính trên mục chọn riêng hoặc mục ký hiệu phụ. (Giá trị mặc định là 2).
-   `Implementation`



## Category
Accessing data
