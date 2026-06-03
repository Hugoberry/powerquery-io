---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Zwraca rekord zawierający części wartości typu datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Zwraca rekord zawierający części danej wartości typu datetimezone (`dateTimeZone`).

-   `dateTimeZone`: wartość typu `datetimezone`, na podstawie części której jest tworzony rekord.


## Examples

### Example #1
Przekonwertuj wartość `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` na rekord zawierający wartości daty, godziny i strefy.
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
