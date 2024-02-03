---
title: Salesforce.Reports
---

# Salesforce.Reports


## Description

Trả về báo cáo từ tài khoản Salesforce.


## Syntax

```powerquery
Salesforce.Reports(
    optional loginUrl as text,
    optional options as record
) as table
```


## Details

Trả về báo cáo về tài khoản Salesforce được cung cấp trong thông tin đăng nhập. Tài khoản sẽ được kết nối thông qua môi trường được cung cấp <code>loginUrl</code>. Nếu không có môi trường nào được cung cấp thì tài khoản sẽ kết nối với môi trường sản xuất (https://login.salesforce.com). Có thể cung cấp tham số bản ghi tùy chọn, <code>options</code>, để chỉ định các thuộc tính bổ sung. Bản ghi có thể chứa các trường sau:    <ul><li><code>ApiVersion</code> : Phi&#234;n bản API Salesforce cần sử dụng cho truy vấn n&#224;y. Khi chưa được chỉ định, phi&#234;n bản API 29.0 sẽ được sử dụng.</li><li><code>Timeout</code> : Khoảng thời gian kiểm so&#225;t thời gian chờ trước khi từ bỏ y&#234;u cầu với m&#225;y chủ. Gi&#225; trị mặc định tùy thuộc theo nguồn.</li></ul>    



## Category
Accessing data
