---
title: VivaInsights.Data
---

# VivaInsights.Data



## Syntax

```powerquery
VivaInsights.Data(
    scopeId as text,
    optional jobName as text,
    optional jobId as text,
    optional advancedParameters as record
) as table
```


## Remarks

Nhập số liệu hàng tuần và dữ liệu thuộc tính từ Workplace Analytics.


## Examples

### Example #1 
Trả về một bảng chứa các thuộc tính thấy được và số liệu hàng tuần cho từng nhân viên được theo dõi số liệu trong phân vùng.
```powerquery
VivaInsights.Data("5f142ea5-c08a-eb02-de68-41dccdefb141")
```

Result: 
```powerquery
#table({"Query1"}, {{"PersonId""}, {"PID"}})
```



