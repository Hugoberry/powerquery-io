---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Vraća zapis koji sadrži delove vrednosti datuma i vremenske zone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Vraća zapis koji sadrži delove date vrednosti datuma i vremenske zone, `dateTimeZone`.

-   `dateTimeZone`: Vrednost `datetimezone` na osnovu koje se izračunava zapis njenih delova.


## Examples

### Example #1
Konvertovanje vrednosti `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` u zapis koji sadrži vrednosti datuma, vremena i zone.
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
