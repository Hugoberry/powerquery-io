---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Vrátí záznam obsahující části hodnoty datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Vrátí záznam obsahující části předané hodnoty datetime, `dateTime`.

-   `dateTime`: Hodnota `datetime`, ze které bude vypočítán záznam jejích částí.


## Examples

### Example #1
Převést hodnotu `#datetime(2011, 12, 31, 11, 56, 2)` na záznam obsahující hodnoty data a času
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
