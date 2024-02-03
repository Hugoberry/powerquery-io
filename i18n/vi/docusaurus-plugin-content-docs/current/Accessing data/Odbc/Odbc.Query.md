---
title: Odbc.Query
---

# Odbc.Query


## Description

Trả về kết quả chạy truy vấn gốc về nguồn dữ liệu ODBC.


## Syntax

```powerquery
Odbc.Query(
    connectionString as any,
    query as text,
    optional options as record
) as table
```


## Details

Trả về kết quả chạy <code>query</code> bằng chuỗi kết nối <code>connectionString</code> sử dụng ODBC. <code>connectionString</code> có thể là văn bản hoặc bản ghi gồm các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định l&#224; 15 gi&#226;y.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Một logic (đ&#250;ng / sai) quyết định xem c&#243; tạo c&#225;c t&#249;y chọn chuỗi kết nối tương th&#237;ch với SQL Server để x&#225;c thực Windows hay kh&#244;ng. Gi&#225; trị mặc định l&#224; true.</li></ul>


## Examples

### Example #1 
Trả về kết quả chạy một truy vấn đơn giản dựa trên chuỗi kết nối được cung cấp.
```powerquery
Odbc.Query("dsn=your_dsn", "select * from Customers")
```

Result: 
```powerquery
table
```




## Category
Accessing data
