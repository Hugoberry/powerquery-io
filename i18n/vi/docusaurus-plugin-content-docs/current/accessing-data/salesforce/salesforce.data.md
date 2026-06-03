---
title: Salesforce.Data
---

# Salesforce.Data


Trả về đối tượng từ tài khoản Salesforce.


## Syntax

```powerquery
Salesforce.Data(
    optional loginUrl as any,
    optional options as record
) as table
```


## Remarks

Trả về các đối tượng trên tài khoản Salesforce được cung cấp trong thông tin đăng nhập. Tài khoản sẽ được kết nối thông qua môi trường được cung cấp `loginUrl`. Nếu không có môi trường nào được cung cấp thì tài khoản sẽ kết nối với môi trường sản xuất (https://login.salesforce.com). Có thể cung cấp tham số bản ghi tùy chọn, `options`, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:

-   `CreateNavigationProperties` : Một phép lô-gic (true/false) đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là false).
-   `ApiVersion` : Phiên bản API Salesforce cần sử dụng cho truy vấn này. Khi chưa được chỉ định, phiên bản API 29.0 sẽ được sử dụng.
-   `Timeout` : Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ yêu cầu với máy chủ. Giá trị mặc định tùy thuộc theo nguồn.



## Category
Accessing data
