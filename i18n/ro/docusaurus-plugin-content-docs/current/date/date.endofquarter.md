---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Returnează sfârșitul trimestrului.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Returnează sfârșitul trimestrului care conține `dateTime`. Informațiile legate de fusul orar sunt păstrate.

-   `dateTime`: o valoare `date`, `datetime` sau `datetimezone` din care este calculat sfârșitul trimestrului.


## Examples

### Example #1
Găsiți sfârșitul trimestrului pentru 10 octombrie 2011, 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
