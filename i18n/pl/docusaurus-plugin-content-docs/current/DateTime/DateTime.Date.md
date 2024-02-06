---
title: DateTime.Date
---

# DateTime.Date


Zwraca składnik daty z danej wartości typu date, datetime lub datetimezone.


## Syntax

```powerquery
DateTime.Date(
    dateTime as any
) as date
```


## Remarks

Zwraca składnik daty z danej wartości <code>dateTime</code> typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Znajdź datę w wartości #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Date(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#date(2010, 12, 31)
```




## Category
DateTime
