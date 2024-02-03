---
title: AdoDotNet.DataSource
---

# AdoDotNet.DataSource


## Description

Trả về bộ sưu tập sơ đồ cho nguồn dữ liệu ADO.NET.


## Syntax

```powerquery
AdoDotNet.DataSource(
    providerName as text,
    connectionString as any,
    optional options as record
) as table
```


## Details

Trả về bộ sưu tập sơ đồ cho nguồn dữ liệu ADO.NET với tên nhà cung cấp là <code>providerName</code> và chuỗi kết nối là <code>connectionString</code>. <code>connectionString</code> có thể là văn bản hoặc bản ghi bao gồm các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Một logic (đ&#250;ng / sai) quyết định xem c&#243; tạo c&#225;c t&#249;y chọn chuỗi kết nối tương th&#237;ch với SQL Server để x&#225;c thực Windows hay kh&#244;ng. Gi&#225; trị mặc định l&#224; true.</li><li><code>TypeMap</code></li></ul>



## Category
Accessing data
