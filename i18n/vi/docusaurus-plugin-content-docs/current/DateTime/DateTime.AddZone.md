---
title: DateTime.AddZone
---

# DateTime.AddZone


## Description

Thêm thông tin múi giờ vào giá trị ngày giờ.


## Syntax

```powerquery
DateTime.AddZone(
    dateTime as datetime,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Details

Thêm thông tin múi giờ vào giá trị <code>dateTime</code>. Thông tin múi giờ bao gồm <code>timezoneHours</code> và tùy chọn <code>timezoneMinutes</code>, xác định chênh lệch mong muốn với thời gian UTC.


## Examples

### Example #1 
Đặt múi giờ thành UTC+7:30 (7 giờ 30 phút trước UTC).
```powerquery
DateTime.AddZone(#datetime(2010, 12, 31, 11, 56, 02), 7, 30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 11, 56, 2, 7, 30)
```




## Category
DateTime
