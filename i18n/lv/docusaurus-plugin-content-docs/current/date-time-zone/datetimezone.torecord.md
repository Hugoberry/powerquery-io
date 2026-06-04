---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Atgriež ierakstu, kurā ir datetimezone vērtības daļas.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Atgriež ierakstu, kurā ir daļas no norādītās datetime vērtības `dateTimeZone`.

-   `dateTimeZone`: `datetime` vērtība, no kuras tiek aprēķināts tās daļu ieraksts.


## Examples

### Example #1
Pārveidojiet vērtību `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` par ierakstu, kas ietver vērtības Datums, Laiks un Josla.
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
