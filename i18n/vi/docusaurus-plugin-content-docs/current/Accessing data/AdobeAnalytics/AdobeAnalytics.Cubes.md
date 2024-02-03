---
title: AdobeAnalytics.Cubes
---

# AdobeAnalytics.Cubes


## Description

Trả về các bộ báo cáo trong Adobe Analytics.


## Syntax

```powerquery
AdobeAnalytics.Cubes(
    optional options as record
) as table
```


## Details

Trả về một bảng gồm các gói đa chiều từ Adobe Analytics. Có thể chỉ định tham số bản ghi tùy chọn, <code>options</code>, để kiểm soát các tùy chọn sau:    <ul><li><code>HierarchicalNavigation</code> : Một ph&#233;p (true/false) logic đặt xem c&#243; xem c&#225;c bảng được nh&#243;m theo t&#234;n lược đồ của ch&#250;ng hay kh&#244;ng (mặc định l&#224; false).</li><li><code>MaxRetryCount</code> : Số lần thử thực hiện lại khi kiểm tra v&#242;ng kết quả của truy vấn. Gi&#225; trị mặc định l&#224; 120.</li><li><code>RetryInterval</code> : Khoảng thời gian giữa c&#225;c lần cố gắng thử lại. Gi&#225; trị mặc định l&#224; 1 gi&#226;y.</li><li><code>Implementation</code> : Chỉ định phi&#234;n bản API Adobe Analytics. Gi&#225; trị hợp lệ l&#224;: &quot;2.0&quot;. C&#224;i đặt mặc định sử dụng API phi&#234;n bản 1.4</li></ul>    



## Category
Accessing data
