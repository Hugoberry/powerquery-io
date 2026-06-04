---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Palauttaa tietueen, joka sisältää datetime-arvon osat.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Palauttaa tietueen, joka sisältää annetun datetime-arvon `dateTime` osat.

-   `dateTime`: `datetime`\-arvo, josta sen osien tietue lasketaan.


## Examples

### Example #1
Muunna `#datetime(2011, 12, 31, 11, 56, 2)` -arvo tietueeksi, joka sisältää Date- ja Time-arvot.
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
