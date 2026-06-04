---
title: Time.ToRecord
---

# Time.ToRecord


Egy olyan rekordot ad vissza, amely tartalmazza az időérték részeit.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Egy olyan rekordot ad vissza, amely tartalmazza a megadott `time` időérték részeit.

-   `time`: Egy `time` érték, amelyből a részeit tartalmazó rekord számítva lesz.


## Examples

### Example #1
A `#time(11, 56, 2)` érték konvertálása egy olyan rekordra, amely tartalmazza az idő értékét
```powerquery
Time.ToRecord(#time(11, 56, 2))
```

Result: 
```powerquery
[
      Hour = 11,
      Minute = 56,
      Second = 2
]
```




## Category
Time
