---
title: Date.EndOfQuarter
---

# Date.EndOfQuarter


Zwraca koniec kwartału.


## Syntax

```powerquery
Date.EndOfQuarter(
    dateTime as any
) as any
```


## Remarks

Zwraca koniec kwartału, który zawiera `dateTime`. Strefa czasowa jest zachowywana.

-   `dateTime`: wartość typu `date`, `datetime` lub `datetimezone`, na podstawie której jest obliczany koniec kwartału.


## Examples

### Example #1
Znajdź koniec kwartału dla daty 10 października 2011 r. 8:00.
```powerquery
Date.EndOfQuarter(#datetime(2011, 10, 10, 8, 0, 0))
```

Result: 
```powerquery
#datetime(2011, 12, 31, 23, 59, 59.9999999)
```




## Category
Date
