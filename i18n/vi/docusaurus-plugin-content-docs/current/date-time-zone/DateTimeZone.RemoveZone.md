---
title: DateTimeZone.RemoveZone
---

# DateTimeZone.RemoveZone


Loại bỏ thông tin múi giờ khỏi giá trị datetimezone cho sẵn.


## Syntax

```powerquery
DateTimeZone.RemoveZone(
    dateTimeZone as datetimezone
) as datetime
```


## Remarks

Trả về một giá trị #datetime từ <code>dateTimeZone</code> đã loại bỏ thông tin múi giờ.


## Examples

### Example #1 
Loại bỏ thông tin múi giờ khỏi giá trị #datetimezone(2011, 12, 31, 9, 15, 36, -7, 0).
```powerquery
DateTimeZone.RemoveZone(#datetimezone(2011, 12, 31, 9, 15, 36, -7, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 9, 15, 36)
```




## Category
DateTimeZone
