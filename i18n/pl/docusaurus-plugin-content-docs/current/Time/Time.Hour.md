---
title: Time.Hour
---

# Time.Hour


Zwraca składnik godziny.


## Syntax

```powerquery
Time.Hour(
    dateTime as any
) as number
```


## Remarks

Zwraca składnik godziny z wartości typu <code>time</code>, <code>datetime</code> lub <code>datetimezone</code> dostarczonej w parametrze <code>dateTime</code>.


## Examples

### Example #1 
Znajdź godzinę w wartości #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Hour(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
9
```




## Category
Time
