---
title: Duration.ToRecord
---

# Duration.ToRecord


Palauttaa tietueen, joka sisältää keston osat.


## Syntax

```powerquery
Duration.ToRecord(
    duration as duration
) as record
```


## Remarks

Palauttaa tietueen, joka sisältää kestoarvon `duration` osat.

-   `duration`: `duration`, josta tietue luodaan.


## Examples

### Example #1
Muunna `#duration(2, 5, 55, 20)` sen osien tietueeksi, mukaan lukien päivät, tunnit, minuutit ja sekunnit tilanteen mukaan.
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
