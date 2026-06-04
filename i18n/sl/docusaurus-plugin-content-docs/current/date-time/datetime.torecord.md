---
title: DateTime.ToRecord
---

# DateTime.ToRecord


Vrne zapis, ki vsebuje dele vrednosti"datetime".


## Syntax

```powerquery
DateTime.ToRecord(
    dateTime as datetime
) as record
```


## Remarks

Vrne zapis, ki vsebuje dele dane vrednosti"datetime", `dateTime`.

-   `dateTime`: vrednost `datetime`, iz katere bo izračunan zapis njenih delov.


## Examples

### Example #1
Pretvorite vrednost `#datetime(2011, 12, 31, 11, 56, 2)` v zapis, ki vsebuje vrednosti"Date"in"Time".
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
