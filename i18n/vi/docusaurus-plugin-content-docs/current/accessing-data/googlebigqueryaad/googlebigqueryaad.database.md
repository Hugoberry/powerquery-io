---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Nhập dữ liệu từ cơ sở dữ liệu Google BigQuery bằng Microsoft Entra ID


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

Trả về bảng liệt kê các dự án có trong Google BigQuery bằng Microsoft Entra ID cho `ID dự án thanh toán`. Có thể chỉ định tham số bản ghi tùy chọn `options` để kiểm soát các tùy chọn sau:

-   `ConnectionTimeout`: Khoảng thời gian kiểm soát thời gian chờ trước khi từ bỏ ý định kết nối với máy chủ. Giá trị mặc định là giá trị Thời gian chờ kết nối ODBC.
-   `CommandTimeout`: Khoảng thời gian kiểm soát thời lượng cho phép chạy truy vấn phía máy chủ trước khi truy vấn bị hủy.
-   `UseStorageApi`: Chỉ định có sử dụng BigQuery Storage API cho các tập kết quả lớn hay không. Giá trị mặc định là true để sử dụng Storage API. Đặt thành false để không sử dụng Storage API
-   `AudienceUri`: Đây là URI đối tượng mà trình điều khiển ODBC có thể sử dụng cho các yêu cầu trao đổi mã thông báo. Trường này phải là URI đủ tiêu chuẩn (ví dụ: //iam.googleapis.com/locations/global/workforcePools/$\{pool\_id\}/providers/azuread) trong đó pool\_id là tên duy nhất toàn cầu để xác định nhóm lực lượng lao động.

Tham số bản ghi được chỉ định là \[option1 = value1, option2 = value2...\].


## Examples

### Example #1
Liệt kê các dự án có sẵn trong Google BigQuery bằng Microsoft Entra ID
```powerquery
GoogleBigQueryAad.Database()
```



