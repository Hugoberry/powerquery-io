---
title: AnalysisServices.Databases
---

# AnalysisServices.Databases


Trả về cơ sở dữ liệu Analysis Services trên máy chủ cụ thể.


## Syntax

```powerquery
AnalysisServices.Databases(
    server as text,
    optional options as record
) as table
```


## Remarks

Trả về cơ sở dữ liệu về phiên bản Analysis Services, `server`. Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `TypedMeasureColumns` : Giá trị lô-gic cho biết liệu các loại được chỉ định trong mô hình dạng bảng hoặc đa chiều có được sử dụng cho các loại cột giá trị đo đã thêm hay không. Khi đặt thành false, loại "số" sẽ được sử dụng cho tất cả các cột giá trị đo. Giá trị mặc định cho tùy chọn này là false.
-   `Culture` : Tên ngôn ngữ chỉ định ngôn ngữ cho dữ liệu. Thuộc tính này tương ứng với thuộc tính chuỗi kết nối 'Mã định danh cục bộ'.
-   `CommandTimeout` : Khoảng thời gian kiểm soát thời lượng truy vấn phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `ConnectionTimeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ nỗ lực kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `SubQueries` : Số (0, 1 hoặc 2) đặt giá trị của thuộc tính "SubQueries" trong chuỗi kết nối. Giá trị này kiểm soát hành động của các thành phần được tính trên mục chọn riêng hoặc mục ký hiệu phụ. (Giá trị mặc định là 2).
-   `Implementation`



## Category
Accessing data
