---
title: AmazonRedshift.Database
---

# AmazonRedshift.Database


## Description

Nhập dữ liệu từ cơ sở dữ liệu của Amazon Redshift.


## Syntax

```powerquery
AmazonRedshift.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Trả về bảng liệt kê các bảng trên mạng nhóm Amazon Redshift <code>máy chủ</code> trong cơ sở dữ liệu <code>cơ sở dữ liệu</code>. Một tham số dưới dạng bản ghi tùy chọn, <code>tùy chọn</code> có thể sẽ được chỉ định cụ thể để kiểm soát các tùy chọn sau:<ul><li><code>Tên nhà cung cấp</code>: Một giá trị dưới dạng văn bản được sử dụng làm Tên nhà cung cấp cho kết nối. Giá trị này được sử dụng khi dùng Microsoft Authentication.</li><li><code>Kích thước lô</code>: Số hàng được tải trong một cuộc gọi đến máy chủ.</li></ul>  


## Examples

### Example #1 

```powerquery
AmazonRedshift.Database("contoso.redshift.amazonaws.com:5439", "dev")
```



