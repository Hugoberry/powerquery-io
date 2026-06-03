---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Returns a record containing the datetimezone value's parts.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Returns a record containing the parts of the given datetimezone value, `dateTimeZone`.

-   `dateTimeZone`: A `datetimezone` value for from which the record of its parts is to be calculated.


## Examples

### Example #1
Convert the `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` value into a record containing Date, Time, and Zone values.
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
