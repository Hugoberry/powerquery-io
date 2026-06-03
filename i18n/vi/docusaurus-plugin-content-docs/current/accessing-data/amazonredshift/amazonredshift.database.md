---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


Nhập dữ liệu từ cơ sở dữ liệu của Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về bảng liệt kê các bảng trên `máy chủ` cụm Amazon Redshift trong cơ sở dữ liệu `cơ sở dữ liệu`. Có thể chỉ định tham số bản ghi tùy chọn, `các tùy chọn`, để kiểm soát các tùy chọn sau:

-   `Tên nhà cung cấp`: Giá trị văn bản để sử dụng làm Tên nhà cung cấp cho kết nối. Giá trị này được sử dụng khi sử dụng Xác thực Microsoft.
-   `Kích thước lô`: Số hàng được tải trong một cuộc gọi đến máy chủ.


## Examples

### Example #1

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



