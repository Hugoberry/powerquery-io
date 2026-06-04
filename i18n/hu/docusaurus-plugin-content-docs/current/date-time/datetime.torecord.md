---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Egy olyan rekordot ad vissza, amely tartalmazza a datetime érték részeit.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Egy olyan rekordot ad vissza, amely tartalmazza a megadott `dateTime` datetime érték részeit.

-   `dateTime`: Egy `datetime` érték, amelyből a részeit tartalmazó rekord számítandó.


## Examples

### Example #1
A `#datetime(2011, 12, 31, 11, 56, 2)` érték konvertálása egy olyan rekordra, amely tartalmazza a dátum és az idő értékét
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
