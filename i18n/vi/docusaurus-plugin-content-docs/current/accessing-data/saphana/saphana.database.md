---
title: SapHana.Database
---

# SapHana.Database


Trả về gói trong cơ sở dữ liệu SAP HANA.


## Syntax

```powerquery
SapHana.Database(
    server as text,
    optional options as record
) as table
```


## Remarks

Trả về một bảng gồm các gói đa chiều từ cơ sở dữ liệu SAP HANA <code>server</code>. Có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau:    <ul><li><code>Query</code> : Đ&#227; sử dụng truy vấn SQL gốc để truy xuất dữ liệu. Nếu truy vấn tạo ra nhiều tập hợp kết quả, chỉ tập hợp đầu ti&#234;n được trả về.</li><li><code>Distribution</code> : SapHanaDistribution sẽ đặt gi&#225; trị của thuộc t&#237;nh &quot;Ph&#226;n phối&quot; trong chuỗi kết nối. Định tuyến c&#226;u lệnh l&#224; phương ph&#225;p đ&#225;nh gi&#225; n&#250;t m&#225;y chủ ch&#237;nh x&#225;c của hệ thống được ph&#226;n phối trước khi thực thi c&#226;u lệnh. Gi&#225; trị mặc định l&#224; SapHanaDistribution.All.</li><li><code>Implementation</code> : Chỉ định triển khai tr&#236;nh nối SAP HANA để sử dụng.</li><li><code>EnableColumnBinding</code> : Li&#234;n kết c&#225;c biến với c&#225;c cột của tập kết quả SAP HANA khi tải dữ liệu. C&#243; thể cải thiện hiệu suất với chi ph&#237; sử dụng bộ nhớ cao hơn một ch&#250;t. Gi&#225; trị mặc định l&#224; false.</li><li><code>ConnectionTimeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ nỗ lực kết nối với m&#225;y chủ. Gi&#225; trị mặc định l&#224; 15 gi&#226;y.</li><li><code>CommandTimeout</code> : Khoảng thời gian kiểm so&#225;t thời lượng ph&#237;a m&#225;y chủ được phép chạy trước khi bị hủy bỏ. Gi&#225; trị mặc định l&#224; 10 ph&#250;t.</li></ul>    



## Category
Accessing data
