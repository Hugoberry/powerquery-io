---
title: MailChimp.Collection
---

# MailChimp.Collection


Trả về bảng có chứa dữ liệu từ điểm cuối MailChimp.


## Syntax

```powerquery
MailChimp.Collection(
    path as text,
    optional entityName as text
) as table
```


## Remarks

Thực hiện lệnh gọi đến API MailChimp và trả về tập dữ liệu kết quả dưới dạng bảng. Tự động chuyển trang qua tất cả các kết quả. Bạn có thể sử dụng tham số entityName (Tên thực thể) cho các điểm cuối API khi điểm cuối gốc và entityName (Tên thực thể) chính trong phản hồi ở định dạng JSON không khớp.


## Examples

### Example #1 
Kéo bảng dữ liệu từ điểm cuối danh sách của API MailChimp.
```powerquery
MailChimp.Collection("danh sách")
```

Result: 
```powerquery
Bảng có chứa dữ liệu danh sách.
```


### Example #2 
Kéo bảng dữ liệu từ điểm cuối chiến dịch-thư mục của API MailChimp.
```powerquery
MailChimp.Collection("chiến dịch-thư mục", "thư mục")
```

Result: 
```powerquery
Bảng có chứa dữ liệu chiến dịch-thư mục.
```



