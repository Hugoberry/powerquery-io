---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Restituisce record contenente le parti del valore datetime.


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Restituisce record contenente le parti del valore datetime specificato `dateTime`.

-   `dateTime`: valore `datetime` da cui deve essere calcolato il record delle parti.


## Examples

### Example #1
Converte il valore `#datetime(2011, 12, 31, 11, 56, 2)` in un record contenente i valori di data e ora.
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
