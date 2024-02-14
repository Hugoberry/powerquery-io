---
title: DateTimeZone.ToLocal
---

# DateTimeZone.ToLocal


Chuyển đổi cấu phần múi giờ thành múi giờ địa phương.


## Syntax

```powerquery
DateTimeZone.ToLocal(
    dateTimeZone as datetimezone
) as datetimezone
```


## Remarks

Thay đổi thông tin múi giờ của giá trị datetimezone <code>dateTimeZone</code> thành thông tin múi giờ địa phương.    Nếu <code>dateTimeZone</code> không có cấu phần múi giờ thì thông tin múi giờ địa phương được thêm.


## Examples

### Example #1 
Thay đổi thông tin múi giờ cho #datetimezone(2010, 12, 31, 11, 56, 02, 7, 30) thành múi giờ địa phương (giả định là PST).
```powerquery
DateTimeZone.ToLocal(#datetimezone(2010, 12, 31, 11, 56, 02, 7, 30))
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 12, 26, 2, -8, 0)
```




## Category
DateTimeZone
