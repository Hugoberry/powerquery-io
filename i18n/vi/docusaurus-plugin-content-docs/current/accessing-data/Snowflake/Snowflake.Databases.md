---
title: Snowflake.Databases
---

# Snowflake.Databases


Nhập dữ liệu từ kho dữ liệu Snowflake Computing.


## Syntax

```powerquery
Snowflake.Databases(
    server as text,
    warehouse as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng liệt kê các bảng trong <code>warehouse</code> Snowflake Computing trên <code>server</code>. Có thể chỉ định một tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau:<ul><li><code>Role</code>: Một giá trị văn bản để sử dụng làm Tên vai trò cho kết nối.</li><li><code>CreateNavigationProperties</code>: Một giá trị (true/false) logic thiết lập xem có tạo thuộc tính dẫn hướng đối với giá trị được trả về hay không (mặc định là true).</li><li><code>ConnectionTimeout</code>: Số giây chờ phản hồi mạng từ Snowflake.</li><li><code>CommandTimeout</code>: Số giây chờ truy vấn thực hiện.</li></ul>    


## Examples

### Example #1 
Liệt kê các bảng trong kho dữ liệu Snowflake.
```powerquery
Snowflake.Databases("contoso.snowflakecomputing.com", "CONTOSO_WH")
```



