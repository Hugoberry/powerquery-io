---
title: Time.StartOfHour
---

# Time.StartOfHour


Zwraca początek godziny.


## Syntax

```powerquery
Time.StartOfHour(
    dateTime as any
) as any
```


## Remarks

Zwraca początek godziny reprezentowany przez `dateTime`. `dateTime` musi być wartością typu `date`, `datetime` lub `datetimezone`.


## Examples

### Example #1
Znajdź początek godziny dla daty 10 października 2011 r. 8:10:32.
```powerquery
Time.StartOfHour(#datetime(2011, 10, 10, 8, 10, 32))
```

Result: 
```powerquery
#datetime(2011, 10, 10, 8, 0, 0)
```




## Category
Date
