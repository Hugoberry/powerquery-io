---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Vráti záznam obsahujúci časti hodnoty dátumu a času.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Vráti záznam obsahujúci časti danej hodnoty datetime `dateTime`.

-   `dateTime`: Hodnota `datetime`, z ktorej častí sa vypočíta príslušný záznam.


## Examples

### Example #1
Konvertuje hodnotu `#datetime(2011, 12, 31, 11, 56, 2)` na záznam obsahujúci hodnoty Dátum a Čas.
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
