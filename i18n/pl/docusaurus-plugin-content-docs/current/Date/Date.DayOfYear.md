---
title: Date.DayOfYear
---

# Date.DayOfYear


## Description

Zwraca liczbę z przedziału od 1 do 366 reprezentującą dzień roku.


## Syntax

```powerquery
Date.DayOfYear(
    dateTime as any
) as number
```


## Details

Zwraca liczbę reprezentującą dzień roku z podanej wartości typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code> dostarczonej w parametrze <code>dateTime</code>.


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
