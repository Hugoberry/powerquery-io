---
title: Date.QuarterOfYear
---

# Date.QuarterOfYear


Zwraca liczbę wskazującą, w którym kwartale roku wypada dana data.


## Syntax

```powerquery
Date.QuarterOfYear(
    dateTime as any
) as number
```


## Remarks

Zwraca liczbę z zakresu od 1 do 4 wskazującą, w którym kwartale roku wypada data `dateTime`. Data `dateTime` może być wartością typu `date`, `datetime` lub `datetimezone`.


## Examples

### Example #1
Ustal, w którym kwartale roku wypada data #date(2011, 12, 31).
```powerquery
Date.QuarterOfYear(#date(2011, 12, 31))
```

Result: 
```powerquery
4
```




## Category
Date
