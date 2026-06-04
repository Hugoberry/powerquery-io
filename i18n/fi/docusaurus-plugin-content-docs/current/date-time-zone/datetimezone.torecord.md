---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Palauttaa tietueen, joka sisältää datetimezone-arvon osat.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Palauttaa tietueen, joka sisältää annetun datetimezone-arvon `dateTimeZone` osat.

-   `dateTimeZone`: `datetimezone`\-arvo, josta sen osien tietue lasketaan.


## Examples

### Example #1
Muunna `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` -arvo tietueeksi, joka sisältää Date-, Time- ja Zone-arvot.
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
