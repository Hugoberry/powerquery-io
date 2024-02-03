---
title: Date.StartOfWeek
---

# Date.StartOfWeek


## Description

Trả về đầu tuần.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Details

Trả về thời gian đầu tuần chứa <code>dateTime</code>.    <code>dateTime</code> phải là giá trị <code>date</code>, <code>datetime</code> hoặc <code>datetimezone</code>.


## Examples

### Example #1 
Tìm đầu tuần cho Thứ Ba, ngày 11 tháng 10 năm 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Tìm đầu tuần cho Thứ Ba, ngày 11 tháng 10 năm 2011, sử dụng Thứ Hai làm đầu tuần.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
