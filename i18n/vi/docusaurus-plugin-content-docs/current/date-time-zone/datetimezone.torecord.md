---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Trả về một bản ghi chứa các phần của giá trị datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Trả về bản ghi có chứa các phần của giá trị datetimezone đã cho, `dateTimeZone`.

-   `dateTimeZone`: Giá trị `datetimezone` cho bản ghi có chứa các phần được tính toán.


## Examples

### Example #1
Chuyển đổi giá trị `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` thành một bản ghi chứa giá trị Ngày, Giờ và Múi giờ.
```powerquery
DateTimeZone.ToRecord(#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2,
      ZoneHours = 8,
      ZoneMinutes = 0
]
```




## Category
DateTimeZone
