---
title: Date.ToRecord
---

# Date.ToRecord


Palauttaa tietueen, joka sisältää päivämääräarvon osat.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Palauttaa tietueen, joka sisältää annetun päivämääräarvon `date` osat.

-   `date`: `date`\-arvo, josta sen osien tietue lasketaan.


## Examples

### Example #1
Muunna `#date(2011, 12, 31)` -arvo tietueeksi, joka sisältää päivämääräarvon osat.
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
