---
title: Salesforce.Reports
---

# Salesforce.Reports


Trả về báo cáo từ tài khoản Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Remarks

Trả về báo cáo về tài khoản Salesforce được cung cấp trong thông tin đăng nhập. Tài khoản sẽ được kết nối thông qua môi trường được cung cấp `loginUrl`. Nếu không có môi trường nào được cung cấp thì tài khoản sẽ kết nối với môi trường sản xuất (https://login.salesforce.com). Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `ApiVersion` : Phiên bản API Salesforce cần sử dụng cho truy vấn này. Khi chưa được chỉ định, phiên bản API 29.0 sẽ được sử dụng.
-   `Timeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ yêu cầu với máy chủ. Giá trị mặc định tùy thuộc theo nguồn.



## Category
Accessing data
