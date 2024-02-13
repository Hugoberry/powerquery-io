---
title: Date.StartOfWeek
---

# Date.StartOfWeek


Zwraca początek tygodnia.


## Syntax

```powerquery
Date.StartOfWeek(
    dateTime as any,
    optional firstDayOfWeek as Day.Type
) as any
```


## Remarks

Zwraca początek tygodnia, który zawiera <code>dateTime</code>.    <code>dateTime</code> musi być wartością typu <code>date</code>, <code>datetime</code> lub <code>datetimezone</code>.


## Examples

### Example #1 
Znajdź początek tygodnia dla wtorek, 11 października 2011.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32))
```

Result: 
```powerquery
// Sunday, October 9th, 2011
#datetime(2011, 10, 9, 0, 0, 0)
```


### Example #2 
Znajdź początek tygodnia dla wtorek, 11 października 2011 r., używając poniedziałku jako początku tygodnia.
```powerquery
Date.StartOfWeek(#datetime(2011, 10, 11, 8, 10, 32), Day.Monday)
```

Result: 
```powerquery
// Monday, October 10th, 2011
#datetime(2011, 10, 10, 0, 0, 0)
```




## Category
Date
