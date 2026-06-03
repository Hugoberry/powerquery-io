---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


Nhập dữ liệu từ HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Remarks

Trả về danh sách máy tính bảng từ HDInsight Interactive Query theo`cơ sở dữ liệu` trên `máy chủ` HDInsight Interactive Query. Số cổng có thể được chỉ định tùy chọn với máy chủ, được phân tách bằng dấu hai chấm. Thông số tùy chọn của `tùy chọn` có thể được chỉ định để kiểm soát các tùy chọn sau đây:

-   `ConnectionTimeout`: Thời lượng kiểm soát khoảng thời gian chờ trước khi dừng kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.
-   `CommandTimeout`: Thời lượng kiểm soát khoảng thời gian truy vấn phía máy chủ được phép chạy trước khi bị hủy. Giá trị mặc định phụ thuộc vào trình điều khiển.

nTham số `tùy chọn` được chỉ định dưới dạng \[option1 = value1, option2 = value2...\].


