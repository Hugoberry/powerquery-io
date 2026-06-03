---
title: DateTimeZone.SwitchZone
---

# DateTimeZone.SwitchZone


Thay đổi múi giờ của giá trị.


## Syntax

```powerquery
DateTimeZone.SwitchZone(
    dateTimeZone as datetimezone,
    timezoneHours as number,
    optional timezoneMinutes as number
) as datetimezone
```


## Remarks

Thay đổi thông tin múi giờ về giá trị datetimezone `dateTimeZone` thành thông tin múi giờ mới do `timezoneHours` cung cấp và `timezoneMinutes` tùy chọn. Nếu `dateTimeZone` không có cấu phần múi giờ thì lỗi sẽ xuất hiện.


## Examples

### Example #1
Thay đổi thông tin múi giờ cho #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) thành 8 giờ.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 8)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, 8, 0)
```


### Example #2
Thay đổi thông tin múi giờ cho #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) thành -30 phút.
```powerquery
DateTimeZone.SwitchZone(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30), 0, -30)
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 3, 56, 2, 0, -30)
```




## Category
DateTimeZone
