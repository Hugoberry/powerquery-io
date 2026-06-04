---
title: Date.ToRecord
---

# Date.ToRecord


Egy olyan rekordot ad vissza, amely tartalmazza a dátumérték részeit.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Egy olyan rekordot ad vissza, amely tartalmazza a megadott `date` dátumérték részeit.

-   `date`: Egy `date` érték, amelyből a részeit tartalmazó rekord számítva lesz.


## Examples

### Example #1
A `#date(2011, 12, 31)` érték konvertálása egy olyan rekordra, amely tartalmazza a dátumérték részeit
```powerquery
Date.ToRecord(#date(2011, 12, 31))
```

Result: 
```powerquery
[
      Year = 2011,
      Month = 12,
      Day = 31
]
```




## Category
Date
