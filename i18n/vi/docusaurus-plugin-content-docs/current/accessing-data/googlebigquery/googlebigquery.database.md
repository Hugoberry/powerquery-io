---
title: GoogleBigQuery.Database
---

# GoogleBigQuery.Database


Nhập dữ liệu từ cơ sở dữ liệu BigQuery của Google.


## Syntax

```powerquery
GoogleBigQuery.Database(
    optional options as record
) as table
```


## Remarks

Trả về một bảng liệt kê các dự án có sẵn trong BigQuery của Google. Có thể chỉ định tham số bản ghi tùy chọn `options` để kiểm soát các tùy chọn sau:

-   `ConnectionTimeout`: Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ ý định kết nối với máy chủ. Giá trị mặc định là giá trị Thời gian chờ kết nối ODBC.
-   `CommandTimeout`: Khoảng thời gian kiểm soát thời lượng cho phép chạy truy vấn phía máy chủ trước khi truy vấn bị hủy.
-   `BillingProject`: Id dự án thanh toán. Giá trị mặc định là dự án có sẵn đầu tiên.
-   `UseStorageApi`: Chỉ định có sử dụng BigQuery Storage API cho các tập kết quả lớn hay không. Giá trị mặc định là true để sử dụng Storage API. Đặt thành false để không sử dụng Storage API

Tham số bản ghi được chỉ định là \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Liệt kê các dự án có sẵn trong BigQuery của Google
```powerquery
GoogleBigQuery.Database()
```



