---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Επιστρέφει μια εγγραφή που περιέχει τα τμήματα της τιμής datetime `dateTime` που δόθηκε.

-   `dateTime`: Μια τιμή `datetime` για την οποία πρόκειται να υπολογιστεί η εγγραφή των μερών της.


## Examples

### Example #1
Μετατρέψτε την τιμή `#datetime(2011, 12, 31, 11, 56, 2)` σε μια εγγραφή που περιέχει τις τιμές "Ημερομηνία" και "Ώρα".
```powerquery
DateTime.ToRecord(#datetime(2011, 12, 31, 11, 56, 2))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31,
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
DateTime
