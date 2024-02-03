---
title: DateTime.Time
---

# DateTime.Time


## Description

Zwraca składnik godziny z danej wartości typu datetime.


## Syntax

```powerquery
DateTime.Time(
    dateTime as any
) as time
```


## Details

Zwraca składnik godziny z danej wartości typu datetime (<code>dateTime</code>).


## Examples

### Example #1 
Znajdź godzinę w wartości #datetime(2010, 12, 31, 11, 56, 02).
```powerquery
DateTime.Time(#datetime(2010, 12, 31, 11, 56, 02))
```

Result: 
```powerquery
#time(11, 56, 2)
```




## Category
DateTime
