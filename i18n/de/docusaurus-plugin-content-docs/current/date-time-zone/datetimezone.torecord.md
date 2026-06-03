---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Gibt einen Datensatz mit den Teilen des datetimezone-Werts zurück.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Gibt einen Datensatz mit den Teilen des angegebenen datetimezone-Werts (`dateTimeZone`) zurück.

-   `dateTimeZone`: Ein `datetimezone`\-Wert, auf dessen Grundlage der Datensatz mit den zugehörigen Teilen berechnet werden soll.


## Examples

### Example #1
Konvertiert den Wert `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` in einen Datensatz mit Datums-, Uhrzeit- und Zeitzonenwerten.
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
