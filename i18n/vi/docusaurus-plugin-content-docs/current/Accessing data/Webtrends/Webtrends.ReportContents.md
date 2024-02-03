---
title: Webtrends.ReportContents
---

# Webtrends.ReportContents


## Description

Trả về bảng bao gồm nội dung báo cáo từ Webtrends.


## Syntax

```powerquery
Webtrends.ReportContents(
    ProfileId as text,
    ReportId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Details

Gọi tới điểm cuối báo cáo Webtrends cho trước và trả về tất cả dữ liệu dưới dạng bảng.


## Examples

### Example #1 
Gọi tới điểm cuối báo cáo khách truy cập Webtrends để có dữ liệu trong 30 ngày qua
```powerquery
Webtrends.ReportContents("98765", "xPcmTDDP0P6")
```

Result: 
```powerquery
Bảng bao gồm dữ liệu khách truy cập
```



