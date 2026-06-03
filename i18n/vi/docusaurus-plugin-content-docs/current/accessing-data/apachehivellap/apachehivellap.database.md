---
title: ApacheHiveLLAP.Database
---

# ApacheHiveLLAP.Database


Nhập dữ liệu từ một Hive LLAP


## Syntax

```powerquery
ApacheHiveLLAP.Database(
    server as text,
    database as text,
    thriftTransport as number,
    optional options as record
) as table
```


## Remarks

Trả về danh sách bảng từ Hive LLAP được chỉ định bởi `cơ sở dữ liệu` trên `máy chủ` Hive LLAP bằng cách sử dụng `giao thức` đã chọn. Số cổng có thể được chỉ định tùy chọn với máy chủ, được phân tách bằng dấu hai chấm. Giao thức Thrift Transport là một loại giao thức được liệt kê với các giá trị "Tiêu chuẩn", "HTTP". Tham số tùy chọn của `tùy chọn` có thể được chỉ định để kiểm soát các tùy chọn sau đây:

-   `ConnectionTimeout`: Thời lượng kiểm soát khoảng thời gian chờ trước khi dừng kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `CommandTimeout`: Thời lượng kiểm soát khoảng thời gian truy vấn phía máy chủ được phép chạy trước khi bị hủy bỏ. Giá trị mặc định phụ thuộc vào trình điều khiển.

Tham số `tùy chọn` được chỉ định là \[option1 = value1, option2 = value2...\].


