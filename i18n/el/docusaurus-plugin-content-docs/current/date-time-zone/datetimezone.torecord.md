---
title: DateTimeZone.ToRecord
---

# DateTimeZone.ToRecord


Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetimezone.


## Syntax

```powerquery
DateTimeZone.ToRecord(
    dateTimeZone as datetimezone
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetimezone `dateTimeZone` που δόθηκε.

-   `dateTimeZone`: Μια τιμή `datetimezone` για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.


## Examples

### Example #1
Μετατρέψτε την τιμή `#datetimezone(2011, 12, 31, 11, 56, 2, 8, 0)` σε μια εγγραφή που περιέχει τις τιμές "Ημερομηνία", "Ώρα" και "Ζώνη".
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
