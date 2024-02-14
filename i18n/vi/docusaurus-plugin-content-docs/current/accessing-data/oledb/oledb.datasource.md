---
title: OleDb.DataSource
---

# OleDb.DataSource


Trả về bảng gồm dạng xem và bảng SQL từ nguồn dữ liệu OLE DB.


## Syntax

```powerquery
OleDb.DataSource(
    connectionString as any,
    optional options as record
) as table
```


## Remarks

Trả về một bảng gồm các dạng xem và bảng SQL từ nguồn dữ liệu OLE DB do chuỗi kết nối <code>connectionString</code> chỉ định. <code>connectionString</code> có thể là văn bản hoặc bản ghi của các cặp giá trị thuộc tính. Giá trị thuộc tính có thể là văn bản hoặc số. Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>CreateNavigationProperties</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; tạo c&#225;c thuộc t&#237;nh điều hướng tr&#234;n gi&#225; trị trả về hay kh&#244;ng (mặc định l&#224; true).</li><li><code>NavigationPropertyNameGenerator</code> : H&#224;m được sử dụng để tạo t&#234;n cho c&#225;c thuộc t&#237;nh điều hướng.</li><li><code>Query</code> : Đ&#227; sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu ti&#234;n được trả về.</li><li><code>HierarchicalNavigation</code> : Một ph&#233;p l&#244;-gic (true/false) đặt xem c&#243; xem c&#225;c bảng được nh&#243;m theo t&#234;n lược đồ của ch&#250;ng hay kh&#244;ng (mặc định l&#224; true).</li><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định phụ thuộc v&#224;o tr&#236;nh điều khiển.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li><li><code>SqlCompatibleWindowsAuth</code> : Một logic (đ&#250;ng / sai) quyết định xem c&#243; tạo c&#225;c t&#249;y chọn chuỗi kết nối tương th&#237;ch với SQL Server để x&#225;c thực Windows hay kh&#244;ng. Gi&#225; trị mặc định l&#224; true.</li></ul>    Chẳng hạn, tham số bản ghi được chỉ định dưới dạng [option1 = value1, option2 = value2...] hoặc [Query = "select ..."].



## Category
Accessing data
