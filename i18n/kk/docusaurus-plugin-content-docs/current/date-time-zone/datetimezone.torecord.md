---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Күн және уақыт белдеуі мәнінің бөліктерін қамтитын жазбаны қайтарады.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Берілген күн және уақыт белдеуі мәнінің, `dateTimeZone`, бөліктерін қамтитын жазбаны қайтарады.

-   `dateTimeZone`: бөліктерінің жазбасы есептелетін `datetimezone` мәні.


## Examples

### Example #1
`#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` мәнін күн, уақыт және белдеу мәндерін қамтитын жазбаға түрлендіру.
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
