---
title: Date.StartOfDay
---

# Date.StartOfDay


Zwraca początek dnia.


## Syntax

```powerquery
Date.StartOfDay(
    dateTime as any
) as any
```


## Remarks

Zwraca początek dnia reprezentowany przez <code>dateTime</code>.    <code>dateTime</code> musi być wartością typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Znajdź początek dnia dla daty 10 października 2011 r. 8:00.
```powerquery
Date.StartOfDay(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
