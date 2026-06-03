---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Restituisce record contenente le parti del valore datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Restituisce un record contenente le parti del valore datetimezone specificato `dateTimeZone`.

-   `dateTimeZone`: valore `datetimezone` da cui deve essere calcolato il record delle parti.


## Examples

### Example #1
Converte il valore `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` in un record contenente i valori di data, ora e fuso orario.
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
