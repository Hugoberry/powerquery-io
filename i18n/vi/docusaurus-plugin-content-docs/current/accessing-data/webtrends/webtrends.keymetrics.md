---
title: Webtrends.KeyMetrics
---

# Webtrends.KeyMetrics


Trả về bảng bao gồm số liệu Webtrends chính.


## Syntax

```powerquery
Webtrends.KeyMetrics(
    ProfileId as text,
    optional startDate as date,
    optional endDate as date
) as table
```


## Remarks

Gọi đến điểm cuối Webtrends KeyMetrics và trả về tất cả dữ liệu dưới dạng bảng.


## Examples

### Example #1 
Gọi ra bảng bao gồm các số liệu chính cho bên thuê 98765 trong 30 ngày vừa qua
```powerquery
Webtrends.KeyMetrics("98765")
```

Result: 
```powerquery
Bảng bao gồm các số liệu chính
```



