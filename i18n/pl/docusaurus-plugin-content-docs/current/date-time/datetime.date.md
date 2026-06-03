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

Zwraca składnik daty parametru `dateTime`, jeśli parametr ma wartość `data`, `data/godzina` lub wartość `strefa czasowa`, lub wartość`null` jeśli parametr ma wartość `null`.


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
