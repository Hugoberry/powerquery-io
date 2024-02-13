---
title: Date.Month
---

# Date.Month


Zwraca składnik miesiąca.


## Syntax

```powerquery
Date.Month(
    dateTime as any
) as number
```


## Remarks

Zwraca składnik miesiąca z wartości typu <code>datetime</code> dostarczonej w parametrze <code>dateTime</code>.


## Examples

### Example #1 
Znajdź miesiąc w wartości #datetime(2011, 12, 31, 9, 15, 36).
```powerquery
Date.Month(#datetime(2011, 12, 31, 9, 15, 36))
```

Result: 
```powerquery
12
```




## Category
Date
