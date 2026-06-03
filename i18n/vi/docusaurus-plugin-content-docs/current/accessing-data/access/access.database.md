---
title: Access.Database
---

# Access.Database


Trả về một đại diện cấu trúc của cơ sở dữ liệu Access.


## Syntax

```powerquery
Access.Database(
    database as binary,
    optional options as record
) as table
```


## Remarks

Trả về cách biểu diễn có cấu trúc của cơ sở dữ liệu Access, `database`. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau đây:

-   `CreateNavigationProperties` : Một phép lô-gic (true/false) đặt xem có tạo các thuộc tính điều hướng trên giá trị trả về hay không (mặc định là false).
-   `NavigationPropertyNameGenerator` : Hàm được sử dụng để tạo tên cho các thuộc tính điều hướng.

Chẳng hạn, tham số bản ghi được chỉ định dưới dạng \[option1 = value1, option2 = value2...\].



## Category
Accessing data
