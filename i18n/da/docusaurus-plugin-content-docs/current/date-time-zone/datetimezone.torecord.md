---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Returnerer en post, der indeholder delene fra værdien af typen datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Returnerer en post, der indeholder delene fra en bestemt værdi af typen datetimezone, `dateTimeZone`.

-   `dateTimeZone`: En værdi af typen `datetimezone`, som delenes post skal beregnes ud fra.


## Examples

### Example #1
Konvertér værdien af typen `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` til en post, der indeholder værdier af typen Date, Time og Zone.
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
