---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Retorna un registre que conté les parts del valor datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Retorna un registre que conté les parts del valor datetimezone proporcionat, `dateTimeZone`.

-   `dateTimeZone`: valor `datetimezone` a partir del qual s'ha de calcular el registre de les seves parts.


## Examples

### Example #1
Converteix el valor `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` en un registre que conté els valors de data, hora i fus.
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
