---
title: DateTimeZone.ToUtc
---

# DateTimeZone.ToUtc


Chuyển đổi cấu phần múi giờ thành múi giờ UTC.


## Syntax

```powerquery
DateTimeZone.ToUtc(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Thay đổi thông tin múi giờ của giá trị ngày giờ <code>dateTimeZone</code> thành thông tin múi giờ UTC hoặc Thời gian Quốc tế.    Nếu <code>dateTimeZone</code> không có cấu phần múi giờ thì thông tin múi giờ UTC được thêm.


## Examples

### Example #1 
Thay đổi thông tin múi giờ cho #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) thành múi giờ UTC.
```powerquery
DateTimeZone.ToUtc(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 4, 26, 2, 0, 0)
```




## Category
DateTimeZone
