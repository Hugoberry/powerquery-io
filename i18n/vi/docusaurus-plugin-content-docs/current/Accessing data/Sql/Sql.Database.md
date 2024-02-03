---
title: Sql.Database
---

# Sql.Database


## Description

Trả về một bảng chứa các bảng SQL, lượt xem và các hàm được lưu trữ từ cơ sở dữ liệu SQL.


## Syntax

```powerquery
Sql.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Trả về một bảng chứa dạng xem, bảng SQL và các hàm đã lưu trữ từ cơ sở dữ liệu SQL Server <code>database</code> trên máy chủ <code>server</code>. Cổng có thể được tùy ý chỉ định với máy chủ, được phân tách bằng dấu hai chấm hoặc dấu phẩy. Bạn có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau:    <ul><li><code>Query</code> : Đ&#227; sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu ti&#234;n được trả về.</li><li><code>CreateNavigationProperties</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; tạo c&#225;c thuộc t&#237;nh điều hướng tr&#234;n gi&#225; trị trả về hay kh&#244;ng (mặc định l&#224; true).</li><li><code>NavigationPropertyNameGenerator</code> : H&#224;m được sử dụng để tạo t&#234;n cho c&#225;c thuộc t&#237;nh điều hướng.</li><li><code>MaxDegreeOfParallelism</code> : Số đặt gi&#225; trị của mệnh đề truy vấn &quot;maxdop&quot; trong truy vấn SQL đ&#227; tạo.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định phụ thuộc v&#224;o tr&#236;nh điều khiển.</li><li><code>HierarchicalNavigation</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; xem c&#225;c bảng được nh&#243;m theo t&#234;n lược đồ của ch&#250;ng hay kh&#244;ng (mặc định l&#224; false).</li><li><code>MultiSubnetFailover</code> : Một ph&#233;p (true/false) logic đặt gi&#225; trị của thuộc t&#237;nh &quot;MultiSubnetFailover&quot; trong chuỗi kết nối (mặc định l&#224; false).</li><li><code>UnsafeTypeConversions</code> : Giá trị l&#244;-gic (true/false) trong đó nếu true, thao tác n&#233;n các chuyển đổi loại c&#243; thể kh&#244;ng th&#224;nh c&#244;ng v&#224; khiến to&#224;n bộ truy vấn kh&#244;ng th&#224;nh c&#244;ng. Kh&#244;ng n&#234;n d&#249;ng cho mục đích sử dụng chung.</li><li><code>ContextInfo</code> : Gi&#225; trị nhị ph&#226;n được sử dụng để đặt CONTEXT_INFO trước khi chạy từng lệnh.</li><li><code>OmitSRID</code> : Giá trị l&#244;-gic (true/false) trong đó nếu true thì sẽ bỏ SRID khi tạo Văn bản quen thu&#244;̣c từ các loại hình học và địa lý.</li><li><code>EnableCrossDatabaseFolding</code> : Một gi&#225; trị l&#244;gic (true/false) m&#224;, nếu l&#224; true, cho ph&#233;p n&#233;n truy vấn cơ sở dữ liệu ch&#233;o tr&#234;n c&#249;ng một m&#225;y chủ. Gi&#225; trị mặc định l&#224; false.</li></ul>    Chẳng hạn, tham số bản ghi được chỉ định dưới dạng [option1 = value1, option2 = value2...] hoặc [Query = "select ..."].    



## Category
Accessing data
