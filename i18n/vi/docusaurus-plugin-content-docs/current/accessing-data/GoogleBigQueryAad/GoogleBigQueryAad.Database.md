---
title: GoogleBigQueryAad.Database
---

# GoogleBigQueryAad.Database


Nhập dữ liệu từ cơ sở dữ liệu BigQuery của Google bằng Azure AD


## Syntax

```powerquery
GoogleBigQueryAad.Database(
    billingProject as text,
    optional options as record
) as table
```


## Remarks

      Trả về một bảng liệt kê các dự án có sẵn trong BigQuery của Google bằng Azure AD dành cho <code>ID Dự án thanh toán</code> . Tham số bản ghi tùy chọn, <code>tùy chọn</code>, có thể được chỉ định để kiểm soát các tùy chọn sau:      <ul>        <li><code>ConnectionTimeout</code>: Khoảng thời gian kiểm soát thời gian cần đợi trước khi từ bỏ nỗ lực thực hiện kết nối với máy chủ. Giá trị mặc định là giá trị Hết thời gian chờ kết nối ODBC.</li>        <li><code>CommandTimeout</code>: Khoảng thời gian kiểm soát thời gian được phép chạy truy vấn phía máy chủ trước khi bị hủy bỏ.</li>        <li><code>UseStorageApi</code>: Chỉ định có nên dùng API Lưu trữ BigQuery cho các tập hợp kết quả lớn hay không. Giá trị mặc định là true để dùng API Lưu trữ. Đặt thành false để không dùng API Lưu trữ</li>        <li><code>AudienceUri</code>: Đây là URI đối tượng mà trình điều khiển ODBC có thể sử dụng cho các yêu cầu trao đổi mã thông báo. Trường này phải là một URI đủ tiêu chuẩn (ví dụ: //iam.googleapis.com/locations/global/workforcePools/$\{pool_id}/providers/azuread) trong đó pool_id là tên duy nhất trên toàn cầu để xác định nhóm lực lượng lao động.</li>      </ul>    Tham số bản ghi được chỉ định là [option1 = value1, option2 = value2...].    


## Examples

### Example #1 
Liệt kê các dự án có sẵn trong BigQuery của Google bằng Azure AD
```powerquery
GoogleBigQueryAad.Database()
```



