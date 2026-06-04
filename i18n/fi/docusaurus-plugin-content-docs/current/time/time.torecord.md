---
title: Time.ToRecord
---

# Time.ToRecord


Palauttaa tietueen, joka sisältää Time-arvon osat.


## Syntax

```powerquery
Time.ToRecord(
    time as time
) as record
```


## Remarks

Palauttaa tietueen, joka sisältää annetun Time-arvon `time` osat.

-   `time`: `time`\-arvo, josta sen osien tietue lasketaan.


## Examples

### Example #1
Muunna `#time(11, 56, 2)` -arvo tietueeksi, joka sisältää Time-arvot.
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
