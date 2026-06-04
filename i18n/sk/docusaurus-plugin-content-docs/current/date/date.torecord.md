---
title: Date.ToRecord
---

# Date.ToRecord


Vráti záznam obsahujúci časti hodnoty dátumu.


## Syntax

```powerquery
Date.ToRecord(
    date as date
) as record
```


## Remarks

Vráti záznam obsahujúci časti danej hodnoty date `date`.

-   `date`: Hodnota `date`, z ktorej častí sa vypočíta príslušný záznam.


## Examples

### Example #1
Konvertuje hodnotu `#date(2011, 12, 31)` na záznam obsahujúci časti z hodnoty dátumu.
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
