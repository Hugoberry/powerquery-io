---
title: Date.StartOfYear
---

# Date.StartOfYear


Zwraca początek roku.


## Syntax

```powerquery
Date.StartOfYear(
    dateTime as any
) as any
```


## Remarks

Zwraca początek roku, który zawiera `dateTime`. `dateTime` musi być wartością typu `date`, `datetime` lub `datetimezone`.


## Examples

### Example #1
Znajdź początek roku dla daty 10 października 2011 r. 8:10:32.
```powerquery
Date.StartOfYear(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 1, 1, 0, 0, 0)
```




## Category
Date
