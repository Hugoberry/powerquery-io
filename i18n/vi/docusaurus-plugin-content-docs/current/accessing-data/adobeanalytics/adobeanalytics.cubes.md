---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


Trả về các bộ báo cáo trong Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Remarks

Trả về một bảng gồm các gói đa chiều từ Adobe Analytics. Có thể chỉ định tham số bản ghi tùy chọn, `options`, để kiểm soát các tùy chọn sau:

-   `HierarchicalNavigation` : Một phép (true/false) logic đặt xem có xem các bảng được nhóm theo tên lược đồ của chúng hay không (mặc định là false).
-   `MaxRetryCount` : Số lần thử thực hiện lại khi kiểm tra vòng kết quả của truy vấn. Giá trị mặc định là 120.
-   `RetryInterval` : Khoảng thời gian giữa các lần cố gắng thử lại. Giá trị mặc định là 1 giây.
-   `Implementation` : Chỉ định phiên bản API Adobe Analytics. Giá trị hợp lệ là: "2.0". Cài đặt mặc định sử dụng API phiên bản 1.4



## Category
Accessing data
