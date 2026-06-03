---
title: Date.StartOfMonth
---

# Date.StartOfMonth


Zwraca początek miesiąca.


## Syntax

```powerquery
Date.StartOfMonth(
    dateTime as any
) as any
```


## Remarks

Zwraca początek miesiąca, który zawiera `dateTime`. `dateTime` musi być wartością `daty` lub `datetime`.


## Examples

### Example #1
Znajdź początek miesiąca dla daty 10 października 2011 r. 8:10:32.
```powerquery
Date.StartOfMonth(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 1, 0, 0, 0)
```




## Category
Date
