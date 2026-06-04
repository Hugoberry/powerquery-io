---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Vrne zapis, ki vsebuje dele vrednosti"datetimezone".


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Vrne zapis, ki vsebuje dele dane vrednosti"datetimezone", `dateTimeZone`.

-   `dateTimeZone`: vrednost `datetimezone`, iz katere bo izračunan zapis njenih delov.


## Examples

### Example #1
Pretvorite vrednost `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` v zapis, ki vsebuje vrednosti"Date","Time"in"Zone".
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
