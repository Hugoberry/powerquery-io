---
title: AzureHiveLLAP.Database
---

# AzureHiveLLAP.Database


## Description

Nhập dữ liệu từ HDInsight Interactive Query


## Syntax

```powerquery
AzureHiveLLAP.Database(
    server as text,
    database as text,
    optional options as record
) as table
```


## Details

Trả về danh sách máy tính bảng từ HDInsight Interactive Query theo<code>cơ sở dữ liệu</code> trên <code>máy chủ</code> HDInsight Interactive Query. Số cổng có thể được chỉ định tùy chọn với máy chủ, được phân tách bằng dấu hai chấm. Thông số tùy chọn của <code>tùy chọn</code> có thể được chỉ định để kiểm soát các tùy chọn sau đây:<ul>        <li><code>ConnectionTimeout</code>: Thời lượng kiểm soát khoảng thời gian chờ trước khi dừng kết nối với máy chủ. Giá trị mặc định phụ thuộc vào trình điều khiển.</li>        <li><code>CommandTimeout</code>: Thời lượng kiểm soát khoảng thời gian truy vấn phía máy chủ được phép chạy trước khi bị hủy. Giá trị mặc định phụ thuộc vào trình điều khiển.</li></ul>nTham số <code>tùy chọn</code> được chỉ định dưới dạng [option1 = value1, option2 = value2...].


