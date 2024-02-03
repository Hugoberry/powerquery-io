---
title: AzureEnterprise.Tables
---

# AzureEnterprise.Tables


## Description

Nhập URL của điểm cuối API REST Azure Enterprise được liên kết với đăng ký của bạn


## Syntax

```powerquery
AzureEnterprise.Tables(
    url as text
) as table
```


## Details

Trả về danh sách báo cáo và tháng có sẵn từ API Azure Enterprise


## Examples

### Example #1 
Sử dụng hàm AzureEnterprise.Tables rồi điều hướng đến một giá trị cụ thể để có kết quả.
```powerquery
cho phép
    Nguồn = AzureEnterprise.Tables("http://ea.azure.com/rest/12345"),
    Nội dung = Source{[Key="Contents"]}[Data]
trong
    Nội dung
```

Result: 
```powerquery
Bảng
```



