---
title: DB2.Database
---

# DB2.Database


Trả về một bảng chứa các dạng xem và bảng SQL có trong cơ sở dữ liệu Db2.


## Syntax

```powerquery
DB2.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng chứa các dạng xem và bảng SQL có trong cơ sở dữ liệu Db2 trên máy chủ <code>server</code> trong phiên bản cơ sở dữ liệu có tên là <code>database</code>. Có thể sử dụng máy chủ để chỉ định cổng và phân tách bằng dấu hai chấm. Bạn có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau đây:    <ul><li><code>CreateNavigationProperties</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; tạo c&#225;c thuộc t&#237;nh điều hướng tr&#234;n gi&#225; trị trả về hay kh&#244;ng (mặc định l&#224; true).</li><li><code>NavigationPropertyNameGenerator</code> : H&#224;m được sử dụng để tạo t&#234;n cho c&#225;c thuộc t&#237;nh điều hướng.</li><li><code>Query</code> : Đ&#227; sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu ti&#234;n được trả về.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định phụ thuộc v&#224;o tr&#236;nh điều khiển.</li><li><code>HierarchicalNavigation</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; xem c&#225;c bảng được nh&#243;m theo t&#234;n lược đồ của ch&#250;ng hay kh&#244;ng (mặc định l&#224; false).</li><li><code>Implementation</code> : Chỉ định triển khai nh&#224; cung cấp cơ sở dữ liệu nội bộ cần sử dụng. Gi&#225; trị hợp lệ l&#224;: &quot;IBM&quot; v&#224; &quot;Microsoft&quot;.</li><li><code>BinaryCodePage</code> : Số CCSID (M&#227; định danh bộ k&#253; tự m&#227; h&#243;a) để giải m&#227; dữ liệu nhị ph&#226;n Db2 FOR BIT th&#224;nh c&#225;c chuỗi k&#253; tự. &#193;p dụng cho Implementation = “Microsoft”. Đặt 0 để tắt t&#237;nh năng chuyển đổi (mặc định). Đặt 1 để chuyển đổi dựa tr&#234;n m&#227; h&#243;a cơ sở dữ liệu. Đặt số CCSID kh&#225;c để chuyển đổi th&#224;nh m&#227; h&#243;a ứng dụng.</li><li><code>PackageCollection</code> : Chỉ định gi&#225; trị chuỗi cho bộ sưu tập g&#243;i (mặc định l&#224; &quot;NULLID&quot;) để cho ph&#233;p sử dụng g&#243;i được chia sẻ cần thiết nhằm xử l&#253; c&#226;u lệnh SQL. &#193;p dụng cho Implementation = &quot;Microsoft&quot;.</li><li><code>UseDb2ConnectGateway</code> : Chỉ định xem c&#243; thực hiện kết nối qua cổng kết nối Db2 Connect kh&#244;ng. &#193;p dụng cho Triển khai = &quot;Microsoft&quot;.</li></ul>    Chẳng hạn, chỉ định tham số bản ghi là [option1 = value1, option2 = value2...] hoặc [Query = "select ..."].    



## Category
Accessing data
