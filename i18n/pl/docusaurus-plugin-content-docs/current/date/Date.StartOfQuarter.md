---
title: Date.StartOfQuarter
---

# Date.StartOfQuarter


Zwraca początek kwartału.


## Syntax

```powerquery
Date.StartOfQuarter(
    dateTime as any
) as any
```


## Remarks

Zwraca początek kwartału, który zawiera <code>dateTime</code>.      <code>dateTime</code> musi być wartością typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Znajdź początek kwartału dla daty 10 października 2011 r. 8:00.
```powerquery
Date.StartOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
