---
title: Time.Minute
---

# Time.Minute


Zwraca składnik minuty.


## Syntax

```powerquery
Time.Minute(
    dateTime as any
) as number
```


## Remarks

Zwraca składnik minuty z wartości typu <code>time</code>, <code>datetime</code> lub <code>datetimezone</code> dostarczonej w parametrze <code>dateTime</code>.


## Examples

### Example #1 
Znajdź minutę w wartości #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Time.Minute(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
15
```




## Category
Time
