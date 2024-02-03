---
title: Date.StartOfDay
---

# Date.StartOfDay


## Description

Trả về thời gian đầu ngày.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Details

Trả về thời gian đầu ngày được biểu thị bởi <code>dateTime</code>.    <code>dateTime</code> phải là giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code>.


## Examples

### Example #1 
Tìm thời gian đầu ngày cho ngày 10 tháng 10 năm 2011, 8:00 SA.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
