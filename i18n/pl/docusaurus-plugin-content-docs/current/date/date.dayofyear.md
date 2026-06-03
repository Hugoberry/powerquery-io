---
title: Date.DayOfYear
---

# Date.DayOfYear


Zwraca liczbę z przedziału od 1 do 366 reprezentującą dzień roku.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Remarks

Zwraca liczbę reprezentującą dzień roku z podanej wartości typu `date`, `datetime` lub `datetimezone` dostarczonej w parametrze `dateTime`.


## Examples

### Example #1
Dzień roku dla daty 1 marca 2011 r.
```powerquery
Date.DayOfYear(#date(2011, 03, 01))
```

Result: 
```powerquery
60
```




## Category
Date
