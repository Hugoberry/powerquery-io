---
title: MySQL.Database
---

# MySQL.Database


Trả về một bảng chứa các bảng SQL, lượt xem và các hàm vô hướng được lưu trữ có trong cơ sở dữ liệu MySQL.


## Syntax

```powerquery
MySQL.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa dạng xem, bảng SQL và các hàm vô hướng đã lưu trữ có trong cơ sở dữ liệu MySQL trên máy chủ <code>server</code> trong phiên bản cơ sở dữ liệu có tên <code>database</code>. Cổng có thể được tùy ý chỉ định với máy chủ, được phân tách bằng dấu hai chấm. Bạn có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau đây:    <ul><li><code>Encoding</code> : Đ&#227; gửi gi&#225; trị TextEncoding chỉ định bộ k&#253; tự được sử dụng để m&#227; h&#243;a tất cả c&#225;c truy vấn đến m&#225;y chủ (gi&#225; trị mặc định l&#224; null).</li><li><code>CreateNavigationProperties</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; tạo c&#225;c thuộc t&#237;nh điều hướng tr&#234;n gi&#225; trị trả về hay kh&#244;ng (mặc định l&#224; true).</li><li><code>NavigationPropertyNameGenerator</code> : H&#224;m được sử dụng để tạo t&#234;n cho c&#225;c thuộc t&#237;nh điều hướng.</li><li><code>Query</code> : Đ&#227; sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu ti&#234;n được trả về.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định phụ thuộc v&#224;o tr&#236;nh điều khiển.</li><li><code>TreatTinyAsBoolean</code> : Một ph&#233;p (true/false) logic x&#225;c định xem c&#243; buộc cột tinyint tr&#234;n m&#225;y chủ dưới dạng gi&#225; trị logic hay kh&#244;ng. Gi&#225; trị mặc định l&#224; true.</li><li><code>OldGuids</code> : Một ph&#233;p (true/false) logic đặt xem sẽ coi cột char(36) (nếu l&#224; false) hay cột binary(16) (nếu l&#224; true) l&#224; GUID. Gi&#225; trị mặc định l&#224; false.</li><li><code>ReturnSingleDatabase</code> : Một ph&#233;p (true/false) logic đặt xem trả về tất cả c&#225;c bảng chứa tất cả cơ sở dữ liệu (nếu l&#224; false) hay trả về bảng v&#224; dạng xem chứa cơ sở dữ liệu được chỉ định (nếu l&#224; true). Gi&#225; trị mặc định l&#224; false.</li><li><code>HierarchicalNavigation</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; xem c&#225;c bảng được nh&#243;m theo t&#234;n lược đồ của ch&#250;ng hay kh&#244;ng (mặc định l&#224; false).</li></ul>    Chẳng hạn, tham số bản ghi được chỉ định dưới dạng [option1 = value1, option2 = value2...] hoặc [Query = "select ..."].    



## Category
Accessing data
