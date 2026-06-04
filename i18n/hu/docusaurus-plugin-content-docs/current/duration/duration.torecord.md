---
title: Duration.ToRecord
---

# Duration.ToRecord


Egy olyan rekordot ad vissza, amely tartalmazza az időtartam részeit.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Egy olyan rekordot ad vissza, amely tartalmazza a(z) `duration` időtartamérték részeit.

-   `duration`: Egy `duration` típusú érték, amelyből a rekord létre lesz hozva.


## Examples

### Example #1
A `#duration(2, 5, 55, 20)` érték konvertálása az azt alkotó részeket – adott esetben napokat, órákat, perceket és másodperceket – tartalmazó rekordra.
```powerquery
Duration.ToRecord(#duration(2, 5, 55, 20))
```

Result: 
```powerquery
[
    Days = 2,
    Hours = 5,
    Minutes = 55,
    Seconds = 20
]
```




## Category
Duration
